import { getCourse, isCourseId, money } from './courses';

export type LeadConfig = { token?: string; chatId?: string };
export async function submitLead(
  request: Request,
  config: LeadConfig,
  send: typeof fetch = fetch
): Promise<Response> {
  const reply = (status: number, message: string) =>
    Response.json({ ok: status === 200, message }, { status, headers: { 'Cache-Control': 'no-store' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return reply(403, 'Запит з іншого сайту відхилено.');
  if (!request.headers.get('content-type')?.includes('application/json'))
    return reply(415, 'Непідтримуваний формат.');
  let data;
  try {
    const body = await request.text();
    if (body.length > 4096) return reply(413, 'Завеликий запит.');
    data = JSON.parse(body);
  } catch {
    return reply(400, 'Некоректний запит.');
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return reply(400, 'Некоректний запит.');
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const phone = typeof data.tel === 'string' ? data.tel.replace(/[\s()-]/g, '') : '';
  if (name.length < 2 || name.length > 80 || /[\r\n]/.test(name) || !/^(\+38|38)?0\d{9}$/.test(phone))
    return reply(400, 'Перевірте ім’я та український номер телефону.');
  if (data.website) return reply(400, 'Не вдалося надіслати заявку.');
  let choice = 'Загальна консультація';
  if (data.courseId != null) {
    if (!isCourseId(data.courseId)) return reply(400, 'Оберіть курс зі списку.');
    const course = getCourse(data.courseId);
    choice = `Курс: ${course.name}`;
    if (data.planId != null) {
      const plan = course.plans.find((p) => p.id === data.planId);
      if (!plan) return reply(400, 'Оберіть тариф цього курсу.');
      choice += `\nТариф: ${plan.originalTitle}\nЦіна: ${money(plan.price)}`;
    }
  } else if (data.planId != null) return reply(400, 'Спочатку оберіть курс.');
  if (!config.token || !config.chatId)
    return reply(503, 'Форма тимчасово недоступна. Зателефонуйте +38 (098) 875 84 42.');
  try {
    const response = await send(`https://api.telegram.org/bot${config.token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: `Заявка Screen Photo School\nІм’я: ${name}\nТелефон: ${phone}\n${choice}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true)
      return reply(502, 'Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.');
    return reply(200, 'Дякуємо! Заявку отримано. Ми зв’яжемося з вами протягом 24 годин.');
  } catch {
    return reply(502, 'Зв’язок перервався. Спробуйте ще раз або зателефонуйте нам.');
  }
}
