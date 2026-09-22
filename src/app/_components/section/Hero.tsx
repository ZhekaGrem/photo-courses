'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
const heroImage = '/hero.jpg';
import { getCourse } from '@/lib/courses';
import { track } from '@/lib/analytics';
export default function Hero() {
  const [preview, setPreview] = useState(false);
  const played = useRef(false);
  const lesson = getCourse('faststart').program[0];
  return (
    <section className="hero">
      <Image
        className="hero-photo"
        src={heroImage}
        alt="Авторський портрет двох моделей у синьому та рожевому кольорах"
        fill
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow">Онлайн-школа фотографії · Олег Сернюк</p>
        <h1>
          Навчіться бачити кадр.
          <br />
          <span>І створювати його.</span>
        </h1>
        <p>
          Від перших налаштувань камери до впевненої роботи зі світлом. Два онлайн-курси — оберіть свій
          наступний крок.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#courses">
            Обрати курс ↗
          </a>
          <button
            className="btn btn-light"
            aria-expanded={preview}
            aria-controls="hero-preview"
            onClick={() => setPreview(!preview)}>
            {preview ? 'Закрити фрагмент' : '▷ Переглянути фрагмент уроку'}
          </button>
        </div>
        {preview && (
          <div id="hero-preview" className="hero-preview">
            <p>Фрагмент першого уроку «Швидкого старту»</p>
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={lesson.content.img}
              src={lesson.content.video}
              onPlay={() => {
                if (played.current) return;
                played.current = true;
                track('lesson_preview_play', {
                  course_id: 'faststart',
                  lesson_id: lesson.id,
                  cta_position: 'hero',
                });
              }}
            />
          </div>
        )}
        <div className="hero-note">
          <span>Теорія, яку можна застосувати</span>
          <span>Світло · Композиція · Практика</span>
        </div>
      </div>
    </section>
  );
}
