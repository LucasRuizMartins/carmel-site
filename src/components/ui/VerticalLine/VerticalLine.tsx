import React from 'react';
import './VerticalLine.css';

interface VerticalLineProps {
  className?: string;
}

export const VerticalLine: React.FC<VerticalLineProps> = ({ className = '' }) => {
  return (
    <div className={`vertical-line ${className}`} />
  );
};
