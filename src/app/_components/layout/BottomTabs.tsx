'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { usePortal } from '@/context/PortalContext';
import { getCourse, courseHref } from '@/lib/courses';
export default function BottomTabs() {
  const pathname = usePathname();
  const { variantId, isPortalOpen } = usePortal();
  const [nearAction, setNearAction] = useState(false);
  useEffect(() => {
    const visible = new Set<Element>();
    setNearAction(false);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setNearAction(visible.size > 0);
    });
    for (const id of ['price', 'contact']) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);
  if (nearAction || isPortalOpen || pathname === '/terms-of-service') return null;
  return (
    <nav className="mobile-action" aria-label="Швидкий перехід">
      <span>{pathname === '/' ? getCourse(variantId).name : 'Знайдіть свій курс'}</span>
      <Link className="btn" href={pathname === '/' ? courseHref(variantId, 'price') : '/#courses'}>
        {pathname === '/' ? 'Переглянути тарифи' : 'Обрати курс'}
      </Link>
    </nav>
  );
}
