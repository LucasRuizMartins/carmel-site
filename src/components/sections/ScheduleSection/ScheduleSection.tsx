import React from 'react';
import { BASE_URL } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Button } from '../../ui/Button/Button';
import './ScheduleSection.css';

interface ScheduleSectionProps {
  onScheduleClick: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onScheduleClick }) => {
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <div className="schedule-grid">
          <div className="schedule-text">
            <SectionTitle light className="mb-6">
              Agende uma conversa
            </SectionTitle>
            <p className="schedule-description">
              Estamos prontos para entender seu ambiente de negócios e criar uma estratégia para
              potencializar a gestão financeira da sua empresa. Vamos conversar!
            </p>
            <Button variant="ghost" size="lg" onClick={onScheduleClick}>
              Agende uma conversa
            </Button>
          </div>
          <div className="schedule-img-wrapper">
            <img
              src={`${BASE_URL}/imagens/home/agende-conversa.png`}
              alt="Agende uma conversa"
              className="schedule-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
