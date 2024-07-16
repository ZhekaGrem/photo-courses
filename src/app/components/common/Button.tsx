import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  const baseStyles =
    'font-bold text-center transform hover:scale-105  rounded-md text-text_header bg-background_btn  hover:bg-background_btn_hover';
  return (
    <button className={`${baseStyles} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
