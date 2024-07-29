import React, { forwardRef } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  const baseStyles =
    'font-bold text-center transform hover:scale-105  rounded-md text-text_header  px-2 py-2';
  return (
    <button aria-label={text} className={`${baseStyles} ${className} `} onClick={onClick}>
      <span className="sr-only">{text}</span>
      {text}
    </button>
  );
};
