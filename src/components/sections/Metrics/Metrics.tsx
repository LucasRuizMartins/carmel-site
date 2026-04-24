import React from 'react';
import { METRICS } from '../../../constants';
import type { Metric } from '../../../types';
import './Metrics.css';

const MetricCard: React.FC<{ metric: Metric }> = ({ metric }) => (
  <div className="metric-card">
    <p className="metric-value">{metric.value}</p>
    <p className="metric-label">{metric.label}</p>
  </div>
);

export const Metrics: React.FC = () => {
  return (
    <section className="metrics-section">
      <div className="metrics-container">
        <p className="metrics-intro">
          Seus investimentos gerenciados por profissionais com vasta experiência e confiáveis.
        </p>
        <h2 className="metrics-heading">Nossos números</h2>
        <p className="metrics-subtitle">
          Conheça a Carmel Capital através dos seus números e métricas.
        </p>
        <div className="metrics-grid">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
};
