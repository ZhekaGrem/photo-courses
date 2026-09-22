'use client';
import { courses, money } from '@/lib/courses';
import { usePortal } from '@/context/PortalContext';
export default function CourseOverview() {
  const { variantId, selectCourse } = usePortal();
  return (
    <section className="section-space" id="courses">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Оберіть напрям</p>
            <h2>З якого кадру почнете ви?</h2>
          </div>
          <p>Перші кроки з камерою чи нова свобода в роботі зі світлом — тут є ваш наступний рівень.</p>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <article className={`course-card ${variantId === course.id ? 'selected' : ''}`} key={course.id}>
              <div className="card-topline">
                <span className="eyebrow">{course.level}</span>
                <span className="course-number">0{index + 1}</span>
              </div>
              <h3>{course.name}</h3>
              <p>{course.summary}</p>
              <ul className="course-facts">
                <li>Онлайн-відеоуроки</li>
                <li>{course.duration}</li>
                <li>{course.lessons}</li>
              </ul>
              <p className="field-hint">Строк доступу й підтримка залежать від тарифу.</p>
              <div className="card-bottom">
                <strong>від {money(Math.min(...course.plans.map((p) => p.price)))}</strong>
                <button
                  className="btn btn-secondary"
                  onClick={() => selectCourse(course.id)}
                  aria-pressed={variantId === course.id}>
                  Програма курсу ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
