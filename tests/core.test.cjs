const { test } = require('node:test');
const assert = require('node:assert/strict');
const { submitLead } = require('../.test-build/lib/leads.js');
const { courses, courseFromUrl, courseHref, money } = require('../.test-build/lib/courses.js');
const { section_6, data_section_2 } = require('../.test-build/db/data.js');
const config = { token: 'test-only-token', chatId: 'test-only-chat' };
const payload = { name: 'Тест', tel: '+380 (98) 123-45-67', courseId: 'prosvitlo', planId: 9 };
const request = (body, headers = {}) =>
  new Request('http://localhost:3000/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', origin: 'http://localhost:3000', ...headers },
    body: JSON.stringify(body),
  });
const neverSend = async () => {
  assert.fail('Unexpected external delivery');
};

test('All eight prices and complete programs/features stay consistent with original data', () => {
  assert.deepEqual(
    courses.map((c) => c.plans.map((p) => p.price)),
    [
      [1200, 4000, 6375, 10000],
      [1500, 4499, 7500, 11500],
    ]
  );
  assert.deepEqual(
    courses.map((c) => c.program.length),
    [13, 10]
  );
  for (const course of courses) {
    const original = section_6.variants.find((v) => v.id === course.id);
    for (const plan of course.plans)
      assert.deepEqual(plan.features, original.price.find((p) => p.id === plan.id).content.features);
    course.program.forEach((lesson, i) => {
      assert.deepEqual(
        lesson.content,
        data_section_2.variants.find((v) => v.id === course.id).program[i].content
      );
      assert.ok(lesson.outcome);
    });
  }
  assert.equal(courses[1].plans[3].discount, 23);
  assert.match(courses[1].plans[1].access, /Уточніть/);
});

test('URL mapping honors course hashes, preserves pricing query, rejects unrelated state', () => {
  for (const id of ['faststart', 'prosvitlo']) {
    assert.equal(courseFromUrl(new URL(courseHref(id), 'https://example.test')), id);
    assert.equal(courseFromUrl(new URL(courseHref(id, 'price'), 'https://example.test')), id);
  }
  assert.equal(courseFromUrl(new URL('https://example.test/?variant=faststart#prosvitlo')), 'prosvitlo');
  assert.equal(courseFromUrl(new URL('https://example.test/mentor#author')), undefined);
  assert.equal(courseFromUrl(new URL('https://example.test/?variant=feedback#price')), undefined);
});

test('Every plan sends authoritative course, original plan title and server price', async () => {
  for (const course of courses)
    for (const plan of course.plans) {
      let calls = 0;
      const response = await submitLead(
        request({ ...payload, courseId: course.id, planId: plan.id, price: 1 }),
        config,
        async (url, options) => {
          calls++;
          assert.match(url, /^https:\/\/api.telegram.org\/bot/);
          const body = JSON.parse(options.body);
          assert.equal(body.chat_id, config.chatId);
          assert.ok(body.text.includes(course.name));
          assert.ok(body.text.includes(plan.originalTitle));
          assert.ok(body.text.includes(`Ціна: ${money(plan.price)}`));
          assert.ok(body.text.includes('+380981234567'));
          assert.ok(options.signal instanceof AbortSignal);
          return Response.json({ ok: true });
        }
      );
      assert.equal(response.status, 200);
      assert.equal((await response.json()).ok, true);
      assert.equal(calls, 1);
    }
});

test('Consultation does not inherit a stale course or tariff', async () => {
  const response = await submitLead(
    request({ name: 'Тест', tel: '0981234567' }),
    config,
    async (_, options) => {
      const body = JSON.parse(options.body);
      assert.match(body.text, /Загальна консультація/);
      assert.doesNotMatch(body.text, /Ціна:|Тариф:/);
      return Response.json({ ok: true });
    }
  );
  assert.equal(response.status, 200);
});

test('Invalid contacts, cross-course plan IDs, bots and unrecognized courses never reach Telegram', async () => {
  for (const invalid of [
    { ...payload, name: 'A' },
    { ...payload, name: 'x\ninjected' },
    { ...payload, tel: '123' },
    { ...payload, courseId: 'feedback' },
    { ...payload, planId: 1 },
    { ...payload, courseId: undefined },
    { ...payload, website: 'spam' },
    null,
    [],
  ]) {
    assert.equal((await submitLead(request(invalid), config, neverSend)).status, 400);
  }
});

test('Missing credentials return an honest unavailable state', async () => {
  const response = await submitLead(request(payload), {}, neverSend);
  assert.equal(response.status, 503);
  assert.equal((await response.json()).ok, false);
});

test('Delivery rejection, non-JSON response and network failure never report success', async () => {
  for (const mock of [
    async () => Response.json({ ok: false }),
    async () => Response.json({ ok: true }, { status: 500 }),
    async () => new Response('bad gateway'),
    async () => {
      throw new Error('secret transport detail');
    },
  ]) {
    const response = await submitLead(request(payload), config, mock);
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.ok, false);
    assert.ok(!JSON.stringify(body).includes('secret'));
  }
});

test('A failed attempt can be retried successfully without changing payload', async () => {
  assert.equal(
    (await submitLead(request(payload), config, async () => Response.json({ ok: false }))).status,
    502
  );
  assert.equal(
    (await submitLead(request(payload), config, async () => Response.json({ ok: true }))).status,
    200
  );
});

test('Origin, content type, malformed and oversized body validation precede delivery', async () => {
  assert.equal(
    (await submitLead(request(payload, { origin: 'https://unrelated.example' }), config, neverSend)).status,
    403
  );
  assert.equal(
    (await submitLead(request(payload, { 'Content-Type': 'text/plain' }), config, neverSend)).status,
    415
  );
  assert.equal(
    (await submitLead(request({ ...payload, extra: 'x'.repeat(5000) }), config, neverSend)).status,
    413
  );
  const malformed = new Request('http://localhost:3000/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{',
  });
  assert.equal((await submitLead(malformed, config, neverSend)).status, 400);
});

test('Analytics transport emits only the event and chosen context', () => {
  const { track } = require('../.test-build/lib/analytics.js');
  global.window = {};
  track('lead_submit_success', { course_id: 'prosvitlo', plan_id: 9 });
  assert.deepEqual(window.dataLayer, [
    { event: 'lead_submit_success', course_id: 'prosvitlo', plan_id: 9, lesson_id: null, cta_position: null },
  ]);
  track('lead_form_open');
  assert.equal(window.dataLayer[1].course_id, null);
  assert.equal(window.dataLayer[1].plan_id, null);
  delete global.window;
});
