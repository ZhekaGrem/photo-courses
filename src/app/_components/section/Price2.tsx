'use client';
import { useEffect, useRef } from 'react';
import { usePortal } from '@/context/PortalContext';
import { getCourse, money } from '@/lib/courses';
import { track } from '@/lib/analytics';
export default function Price2() {
  const { variantId, openLead } = usePortal();
  const course = getCourse(variantId);
  const section = useRef<HTMLElement>(null);
  const viewed = useRef(new Set<string>());
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewed.current.has(variantId)) {
          track('pricing_view', { course_id: variantId });
          viewed.current.add(variantId);
        }
      },
      { threshold: 0.05 }
    );
    if (section.current) observer.observe(section.current);
    return () => observer.disconnect();
  }, [variantId]);
  return (
    <section ref={section} className="section-space pricing-section" id="price">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / Ваш формат навчання</p>
            <h2>Тарифи · {course.name}</h2>
          </div>
          <p>Оберіть строк доступу та рівень підтримки. У кожному тарифі — відеоуроки обраного курсу.</p>
        </div>
        <div className="pricing-grid">
          {course.plans.map((plan) => (
            <article className="price-card" key={`${course.id}-${plan.id}`}>
              <h3>{plan.title}</h3>
              <p className="plan-audience">{plan.audience}</p>
              <div className="price-block">
                <span className="previous-price">
                  {plan.previousPrice ? (
                    <>
                      <del>{money(plan.previousPrice)}</del>
                      <span>≈ −{plan.discount}%</span>
                    </>
                  ) : (
                    'Вартість навчання'
                  )}
                </span>
                <strong>{money(plan.price)}</strong>
              </div>
              <dl className="plan-facts">
                <div>
                  <dt>Доступ</dt>
                  <dd>{plan.access}</dd>
                </div>
                <div>
                  <dt>Матеріали</dt>
                  <dd>{plan.materials}</dd>
                </div>
                <div>
                  <dt>Перевірка завдань</dt>
                  <dd>{plan.review}</dd>
                </div>
              </dl>
              <button
                className="btn"
                onClick={(event) => {
                  track('plan_select', { course_id: course.id, plan_id: plan.id, cta_position: 'pricing' });
                  openLead({ courseId: course.id, planId: plan.id }, 'pricing', event.currentTarget);
                }}>
                Залишити заявку
              </button>
              <details className="plan-details">
                <summary>Усі умови тарифу</summary>
                <dl className="plan-facts">
                  <div>
                    <dt>Особистий супровід</dt>
                    <dd>{plan.personal}</dd>
                  </div>
                  <div>
                    <dt>Після курсу</dt>
                    <dd>{plan.aftercare}</dd>
                  </div>
                </dl>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Після заявки уточнимо деталі навчання та оплати. Якщо вагаєтеся,{' '}
          <button className="text-link" onClick={() => openLead({ courseId: course.id }, 'pricing_help')}>
            допоможемо обрати тариф
          </button>
          .
        </p>
      </div>
    </section>
  );
}
