import React from 'react';
import { PARTNERS } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Partners.css';

export const Partners: React.FC = () => {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="partners-section">
      <div className="partners-header">
        <SectionTitle centered subtitle="Nossos parceiros são a força que nos move em prol de transformar em sonhos cada investimento!">
          Parceiros atendidos
        </SectionTitle>
      </div>

      <div className="partners-marquee-wrapper">
        <div className="partners-track">
          {doubled.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-item">
              <img src={partner.src} alt={partner.alt} className="partner-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
