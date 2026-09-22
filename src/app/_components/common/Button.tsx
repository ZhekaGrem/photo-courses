'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { usePortal } from '@/context/PortalContext';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  openPortal?: boolean;
  text: string;
  children: ReactNode;
}
export function Button({
  text,
  children,
  openPortal = false,
  className = 'btn',
  onClick,
  ...props
}: ButtonProps) {
  const { openLead } = usePortal();
  return (
    <button
      type="button"
      aria-label={text}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (openPortal) openLead(null, 'consultation', event.currentTarget);
      }}
      {...props}>
      {children}
    </button>
  );
}
