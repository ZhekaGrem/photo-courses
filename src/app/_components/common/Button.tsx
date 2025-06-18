'use client';
import { DetailedHTMLProps, ReactNode, ButtonHTMLAttributes } from 'react';
import { usePortal } from '@/context/PortalContext';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  openPortal?: boolean;
  text: string;
  className?: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  children,
  openPortal = false,
  className,
  onClick,
  ...props
}) => {
  const { setIsPortalOpen } = usePortal();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (openPortal === true) {
      setIsPortalOpen(true);
    }
  };
  const baseStyles = 'font-bold text-center transform hover:scale-105   px-3 py-2';
  return (
    <button aria-label={text} className={`${baseStyles} ${className} `} onClick={handleClick} {...props}>
      <span className="sr-only">{text}</span>
      {children}
    </button>
  );
};
