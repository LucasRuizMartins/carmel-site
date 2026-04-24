import React, { useState } from 'react';
import { PROFILE_CARDS } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { VerticalLine } from '../../ui/VerticalLine/VerticalLine';
import { Button } from '../../ui/Button/Button';
import type { ProfileCard } from '../../../types';
import './WhoAreYou.css';

const ProfileCardItem: React.FC<{ card: ProfileCard }> = ({ card }) => {
  const [touched, setTouched] = useState(false);

  const handleTouchStart = () => setTouched(true);
  const handleTouchEnd = () => setTouched(false);

  return (
    <div
      className={`profile-card${touched ? ' profile-card--active' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div className="profile-card-img-wrapper">
        <img src={card.imageSrc} alt={card.title} className="profile-card-img" />
      </div>
      <div className="profile-card-body">
        <div className="profile-card-title-wrapper">
          <VerticalLine className="h-8 lg:h-10" />
          <h3 className="profile-card-title primary-h1">{card.title}</h3>
        </div>
        <p className="profile-card-text">{card.description}</p>
        <div className="profile-card-actions">
          <a href={card.href}>
            <Button variant="outline" size="sm" className="profile-card-btn">
              Saiba mais
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const WhoAreYou: React.FC = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        {/* Wrapper do título centralizado */}
        <div className="who-title-wrapper">

          <SectionTitle>Quem é você?</SectionTitle>
        </div>

        {/* Descrição centralizada */}
        <p className="who-description">
          Carmel Capital, uma gestora financeira experiente que ajuda a otimizar investimentos
          pessoais ou criar estratégias para potencializar a gestão financeira da sua empresa.
        </p>

        {/* Grid de cards */}
        <div className="who-grid">
          {PROFILE_CARDS.map((card) => (
            <ProfileCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
