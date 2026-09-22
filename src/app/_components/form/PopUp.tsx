'use client';
import { useRef, useState } from 'react';
import { usePortal } from '@/context/PortalContext';
import { courses, getCourse, isCourseId, money } from '@/lib/courses';
import { track } from '@/lib/analytics';

export default function PopUp({ onClose }: { onClose: () => void }) {
  const { selection, setSelection } = usePortal();
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [errors, setErrors] = useState({ name: '', tel: '', form: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const locked = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const course = selection ? getCourse(selection.courseId) : null;
  const plan = course?.plans.find((p) => p.id === selection?.planId);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current) return;
    const nextErrors = {
      name: name.trim().length < 2 ? 'Вкажіть ім’я: щонайменше 2 символи.' : '',
      tel: /^(\+38|38)?0\d{9}$/.test(tel.replace(/[\s()-]/g, ''))
        ? ''
        : 'Вкажіть український номер, наприклад +380 98 123 45 67.',
      form: '',
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.tel) {
      formRef.current?.querySelector<HTMLInputElement>(`#lead-${nextErrors.name ? 'name' : 'tel'}`)?.focus();
      return;
    }
    locked.current = true;
    setStatus('loading');
    const params = { course_id: selection?.courseId, plan_id: selection?.planId };
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          tel,
          courseId: selection?.courseId,
          planId: selection?.planId,
          website: new FormData(event.currentTarget).get('website'),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true)
        throw new Error(result.message || 'Не вдалося надіслати заявку.');
      setStatus('success');
      track('lead_submit_success', params);
    } catch (error) {
      setErrors((previous) => ({
        ...previous,
        form:
          error instanceof Error && error.message !== 'Failed to fetch'
            ? error.message
            : 'Немає зв’язку. Спробуйте ще раз або зателефонуйте нам.',
      }));
      setStatus('idle');
      track('lead_submit_error', params);
    } finally {
      locked.current = false;
    }
  }
  if (status === 'success')
    return (
      <div className="form-success">
        <div role="status" tabIndex={-1} ref={(element) => element?.focus()}>
          <h2>Дякуємо! Заявку отримано.</h2>
          <p>Ми зв’яжемося з вами протягом 24 годин, щоб уточнити деталі навчання.</p>
        </div>
        <button className="btn" onClick={onClose}>
          Готово
        </button>
      </div>
    );
  return (
    <form ref={formRef} className="lead-form" data-clarity-mask="true" onSubmit={submit} noValidate>
      <fieldset disabled={status === 'loading'}>
        <label htmlFor="lead-course">Курс</label>
        <select
          id="lead-course"
          value={selection?.courseId || ''}
          onChange={(e) => setSelection(isCourseId(e.target.value) ? { courseId: e.target.value } : null)}>
          <option value="">Потрібна допомога з вибором</option>
          {courses.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {course && (
          <>
            <label htmlFor="lead-plan">Тариф</label>
            <select
              id="lead-plan"
              value={selection?.planId || ''}
              onChange={(e) =>
                setSelection({
                  courseId: course.id,
                  planId: e.target.value ? Number(e.target.value) : undefined,
                })
              }>
              <option value="">Порадьте тариф</option>
              {course.plans.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title} — {money(item.price)}
                </option>
              ))}
            </select>
          </>
        )}
        {plan && (
          <p className="selection-summary">
            {course?.name} · {plan.title}
            <strong>{money(plan.price)}</strong>
          </p>
        )}
        <label htmlFor="lead-name">Ваше ім’я</label>
        <input
          autoFocus
          id="lead-name"
          name="name"
          autoComplete="name"
          required
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p className="field-error" id="name-error">
            {errors.name}
          </p>
        )}
        <label htmlFor="lead-tel">Номер телефону</label>
        <input
          id="lead-tel"
          name="tel"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={30}
          placeholder="+380 98 123 45 67"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          aria-invalid={!!errors.tel}
          aria-describedby={errors.tel ? 'tel-error' : 'tel-hint'}
        />
        <p className="field-hint" id="tel-hint">
          Зателефонуємо, щоб відповісти на запитання й уточнити ваш вибір.
        </p>
        {errors.tel && (
          <p className="field-error" id="tel-error">
            {errors.tel}
          </p>
        )}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="lead-website">Website</label>
          <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <p className="field-hint">
          Ім’я та телефон потрібні школі для відповіді на вашу заявку.{' '}
          <a href="/terms-of-service" target="_blank" rel="noreferrer">
            Умови навчання ↗
          </a>
        </p>
        <button className="btn" disabled={status === 'loading'} type="submit">
          {status === 'loading' ? 'Надсилаємо…' : 'Залишити заявку'}
        </button>
      </fieldset>
      {errors.form && (
        <div className="field-error" role="alert">
          {errors.form} <a href="tel:+380988758442">+38 (098) 875 84 42</a>
        </div>
      )}
    </form>
  );
}
