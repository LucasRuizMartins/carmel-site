import React, { useState } from 'react';
import { FUNDS } from '../../../constants';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import type { Fund } from '../../../types';
import './Funds.css';

const FundCard: React.FC<{ fund: Fund }> = ({ fund }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fund-card">
      <button
        className="fund-card-header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div>
          <p className="fund-card-name">{fund.name}</p>
          <p className="fund-card-cnpj">{fund.cnpj}</p>
        </div>
        <span className={`fund-card-toggle ${open ? 'rotate-45' : ''}`}>+</span>
      </button>

      {open && (
        <div className="fund-card-body">
          {/* Operational Info */}
          <h4 className="fund-section-label">Informações Operacionais</h4>
          <div className="fund-info-grid">
            {fund.info.map((item) => (
              <div key={item.label} className="fund-info-row">
                <span className="fund-info-key">{item.label}</span>
                <span className="fund-info-value">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Objective */}
          <h4 className="fund-section-label fund-section-label--top">Objetivos</h4>
          <p className="fund-objective-text">{fund.objective}</p>

          {/* Documents */}
          {fund.documents.length > 0 && (
            <>
              <h4 className="fund-section-label fund-section-label--top">Documentos</h4>
              <div className="fund-docs-list">
                {fund.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fund-doc-link"
                  >
                    {doc.label}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export const Funds: React.FC = () => {
  return (
    <section id="nossos-fundos" className="funds-section">
      <div className="funds-container">
        <SectionTitle
          subtitle="A Carmel Capital tem em seu portfólio Fundos Abertos a investidores através das plataformas do mercado e Fundos Estruturados Fechados desenvolvidos conforme demandas específicas dos nossos clientes."
          className="mb-12"
        >
          Conheça nossos fundos
        </SectionTitle>

        <div className="funds-list">
          {FUNDS.map((fund) => (
            <FundCard key={fund.id} fund={fund} />
          ))}
        </div>

        <div className="funds-footer">
          <a href="/fundos" className="funds-more-link">Ver mais fundos</a>
        </div>
      </div>
    </section>
  );
};
