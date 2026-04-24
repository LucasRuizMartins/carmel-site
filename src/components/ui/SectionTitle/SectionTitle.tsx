import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`section-title-wrapper ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={`section-title-heading primary-h1 ${light ? 'text-white' : 'text-navy'}`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className={`section-title-subtitle ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
