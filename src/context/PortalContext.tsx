'use client';
import { createContext, useState, useContext, useEffect, useCallback, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Portal from '../app/_components/layout/Portal';
import { CourseId, LeadSelection, courseFromUrl } from '@/lib/courses';
import { track } from '@/lib/analytics';

type PortalContextType = {
  isPortalOpen: boolean;
  variantId: CourseId;
  selection: LeadSelection;
  setSelection: React.Dispatch<React.SetStateAction<LeadSelection>>;
  openLead: (selection?: LeadSelection, position?: string, trigger?: HTMLElement) => void;
  selectCourse: (id: CourseId, position?: string) => void;
};
const PortalContext = createContext<PortalContextType | undefined>(undefined);
function CourseUrlSync({ onChange }: { onChange: (id: CourseId) => void }) {
  const pathname = usePathname();
  const search = useSearchParams().toString();
  useEffect(() => {
    const sync = () => {
      if (window.location.pathname !== '/') return;
      const id = courseFromUrl(new URL(window.location.href));
      if (id) onChange(id);
      else if (!window.location.hash) onChange('faststart');
    };
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [pathname, search, onChange]);
  return null;
}
export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [variantId, setVariantId] = useState<CourseId>('faststart');
  const [selection, setSelection] = useState<LeadSelection>(null);
  const opener = useRef<HTMLElement | null>(null);
  const close = useCallback(() => {
    setIsPortalOpen(false);
    requestAnimationFrame(() => {
      if (opener.current?.isConnected && opener.current.getClientRects().length) opener.current.focus();
      else document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    });
  }, []);
  const openLead = (next: LeadSelection = null, position = 'general', trigger?: HTMLElement) => {
    opener.current = trigger || (document.activeElement as HTMLElement);
    setSelection(next);
    setIsPortalOpen(true);
    track('lead_form_open', { course_id: next?.courseId, plan_id: next?.planId, cta_position: position });
  };
  const selectCourse = (id: CourseId, position = 'course_picker') => {
    setVariantId(id);
    track('course_select', { course_id: id, cta_position: position });
    if (window.location.pathname === '/') {
      const next = new URL(window.location.href);
      next.searchParams.delete('variant');
      next.hash = id;
      window.history.pushState(null, '', next);
      requestAnimationFrame(() => document.getElementById('program')?.scrollIntoView());
    }
  };
  return (
    <PortalContext.Provider
      value={{ isPortalOpen, variantId, selection, setSelection, openLead, selectCourse }}>
      <Suspense fallback={null}>
        <CourseUrlSync onChange={setVariantId} />
      </Suspense>
      {children}
      {isPortalOpen && <Portal onClose={close} />}
    </PortalContext.Provider>
  );
}
export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) throw new Error('usePortal must be used within a PortalProvider');
  return context;
}
