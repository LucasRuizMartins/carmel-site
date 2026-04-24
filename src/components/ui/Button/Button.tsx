import React from 'react';
import './Button.css';

// 1. Declare todas as variantes em um único tipo
type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'green-outline' | 'green-inverted';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// 2. Mapeie todas as classes em um único objeto
const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn--primary',
  outline: 'btn--outline',
  ghost: 'btn--ghost',
  'green-outline': 'btn--green-outline',
  'green-inverted': 'btn--green-inverted',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`btn ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};