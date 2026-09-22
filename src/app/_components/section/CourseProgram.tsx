'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePortal } from '@/context/PortalContext';
import { courses, getCourse, courseFromUrl } from '@/lib/courses';
import { track } from '@/lib/analytics';
function Lesson({
  lesson,
  courseId,
}: {
  lesson: ReturnType<typeof getCourse>['program'][number];
  courseId: string;
}) {
  const [open, setOpen] = useState(false);
  const played = useRef(false);
  return (
    <details className="lesson" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>
        <span className="lesson-number">{String(lesson.id + 1).padStart(2, '0')}</span>
        <span>
          <strong>{lesson.title}</strong>
          <span className="lesson-outcome">{lesson.outcome}</span>
        </span>
        <span className="expand-mark" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="lesson-body">
        <div>
          <h3>{lesson.content.title}</h3>
          <ul>
            {lesson.content.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          {open &&
            (lesson.content.video ? (
              <>
                <p className="eyebrow">Фрагмент уроку</p>
                <video
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster={lesson.content.img}
                  src={lesson.content.video}
                  onPlay={() => {
                    if (!played.current) {
                      track('lesson_preview_play', {
                        course_id: courseId,
                        lesson_id: lesson.id,
                        cta_position: 'program',
                      });
                      played.current = true;
                    }
                  }}
                />
              </>
            ) : lesson.content.img ? (
              <Image
                src={lesson.content.img}
                alt={lesson.content.img_alt || lesson.title}
                width={640}
                height={420}
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            ) : null)}
        </div>
      </div>
    </details>
  );
}
export default function CourseProgram() {
  const { variantId, selectCourse } = usePortal();
  const course = getCourse(variantId);
  const lastView = useRef('');
  useEffect(() => {
    const urlCourse = courseFromUrl(new URL(window.location.href));
    if (urlCourse && urlCourse !== variantId) return;
    if (lastView.current !== variantId) {
      track('course_view', { course_id: variantId });
      lastView.current = variantId;
    }
    const hash = window.location.hash.slice(1);
    if (hash === variantId) requestAnimationFrame(() => document.getElementById('program')?.scrollIntoView());
  }, [variantId]);
  return (
    <section className="section-space program-section" id="program">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Від знання до практики</p>
            <h2>Програма навчання</h2>
          </div>
          <div className="course-switch" aria-label="Курс">
            {courses.map((item) => (
              <button
                key={item.id}
                aria-pressed={variantId === item.id}
                onClick={() => selectCourse(item.id, 'program')}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="program-intro" id={variantId}>
          <h3>{course.name}</h3>
          <p>{course.result}</p>
          <span>
            {course.duration} · {course.lessons}
          </span>
        </div>
        <div key={variantId} className="lesson-list">
          {course.program.map((lesson) => (
            <Lesson key={lesson.id} lesson={lesson} courseId={variantId} />
          ))}
        </div>
      </div>
    </section>
  );
}
