import React from 'react';
import { PROFILE_CARDS } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { VerticalLine } from '../../ui/VerticalLine/VerticalLine';
import { Button } from '../../ui/Button/Button';
import type { ProfileCard } from '../../../types';
import './WhoAreYou.css';

const ProfileCardItem: React.FC<{ card: ProfileCard }> = ({ card }) => (
  <div className="profile-card">
    <div className="profile-card-img-wrapper">
      <img src={card.imageSrc} alt={card.title} className="profile-card-img" />
    </div>
    <div className="profile-card-body">
      <div className="profile-card-title-wrapper">
        <VerticalLine className="h-8 md:h-10" />
        <h3 className="profile-card-title">{card.title}</h3>
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

export const WhoAreYou: React.FC = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        <div className="who-title-wrapper">
          <VerticalLine />
          <SectionTitle>Quem é você?</SectionTitle>
        </div>
        <p className="who-description">
          Carmel Capital, uma gestora financeira experiente que ajuda a otimizar investimentos
          pessoais ou criar estratégias para potencializar a gestão financeira da sua empresa.
        </p>
        <div className="who-grid">
          {PROFILE_CARDS.map((card) => (
            <ProfileCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
