'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePortal } from '@/context/PortalContext';
import { courses, courseHref } from '@/lib/courses';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { variantId, selectCourse, openLead } = usePortal();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          toggle.current?.focus();
        }
      }}>
      <div className="header-inner container">
        <Link
          href="/"
          className="brand"
          aria-label="Screen Photo School — головна"
          onClick={() => setOpen(false)}>
          <span className="brand-wordmark" aria-hidden="true">
            <span className="brand-name">
              Screen
              <svg className="brand-frame" viewBox="0 0 10 10" fill="none" focusable="false">
                <path d="M1 1H9V9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="brand-caption">Photo School</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          {open ? 'Закрити ×' : 'Меню ☰'}
        </button>
        <nav
          id="site-navigation"
          className={`site-nav ${open ? 'is-open' : ''}`}
          aria-label="Головна навігація">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={courseHref(course.id)}
              aria-current={pathname === '/' && variantId === course.id ? 'location' : undefined}
              onClick={(event) => {
                setOpen(false);
                if (pathname === '/') {
                  event.preventDefault();
                  selectCourse(course.id, 'header');
                }
              }}>
              {course.name}
            </Link>
          ))}
          <Link
            href="/mentor#author"
            aria-current={pathname === '/mentor' ? 'page' : undefined}
            onClick={() => setOpen(false)}>
            Про автора
          </Link>
          <Link
            href="/feedback"
            aria-current={pathname === '/feedback' ? 'page' : undefined}
            onClick={() => setOpen(false)}>
            Відгуки
          </Link>
          <button
            className="btn"
            onClick={(event) => {
              openLead(null, 'header', event.currentTarget);
              setOpen(false);
            }}>
            Консультація
          </button>
        </nav>
      </div>
    </header>
  );
}
