import React from 'react';
import { COLLAGE_IMAGES } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Button } from '../../ui/Button/Button';
import './History.css';

export const History: React.FC = () => {
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-grid">
          {/* Collage */}
          <div className="history-collage">
            {COLLAGE_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`history-collage-item ${i === 0 ? 'history-collage-item--full' : ''}`}
              >
                <img src={img.src} alt={img.alt} className="history-collage-img" />
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="history-text">
            <SectionTitle className="mb-6">Nossa história</SectionTitle>
            <p className="history-description">
              A Carmel Capital é uma gestora de recursos independente, especializada em crédito
              estruturado. Seus sócios possuem mais de 30 anos de experiência no mercado
              financeiro, sendo 13 deles dedicados à administração de fundos em gestoras e
              instituições renomadas.
            </p>
            <p className="history-description">
              Entre seus executivos estão Alexandre Jorge Chaia, responsável pela gestão e
              estruturação, Ademir Silva Oliveira, à frente das operações e controles, e Guaraci
              Sillos Moreira, advogado especializado em produtos estruturados.
            </p>
            <a href="/quem-somos">
              <Button variant="outline" size="md">Saiba mais</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
