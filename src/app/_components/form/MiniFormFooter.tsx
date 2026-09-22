'use client';
import { usePortal } from '@/context/PortalContext';
export default function MiniFormFooter() {
  const { openLead } = usePortal();
  return (
    <button className="btn" onClick={(event) => openLead(null, 'footer', event.currentTarget)}>
      Отримати консультацію
    </button>
  );
}
