import React from 'react';
import './SectionTitle.css';
import { VerticalLine } from '../VerticalLine/VerticalLine';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  withLine?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  centered = false,
  light = false,
  className = '',
  withLine = true,
}) => {
  return (
    <div className={`section-title-wrapper ${centered ? 'flex flex-col items-center text-center' : 'flex flex-col items-start'} ${className}`}>
      <div className={`flex items-center gap-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        {withLine && <VerticalLine />}
        <h2
          className={`section-title-heading primary-h1 ${light ? 'text-white' : ''}`}
        >
          {children}
        </h2>
      </div>
      {subtitle && (
        <p className={`section-title-subtitle ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
