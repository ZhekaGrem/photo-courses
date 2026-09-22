type EventName =
  | 'course_view'
  | 'course_select'
  | 'lesson_preview_play'
  | 'pricing_view'
  | 'plan_select'
  | 'lead_form_open'
  | 'lead_submit_success'
  | 'lead_submit_error';
type EventParams = { course_id?: string; plan_id?: number; lesson_id?: number; cta_position?: string };
export function track(event: EventName, params: EventParams = {}) {
  const target = window as Window & { dataLayer?: object[] };
  target.dataLayer = target.dataLayer || [];
  target.dataLayer.push({
    event,
    course_id: params.course_id ?? null,
    plan_id: params.plan_id ?? null,
    lesson_id: params.lesson_id ?? null,
    cta_position: params.cta_position ?? null,
  });
}
