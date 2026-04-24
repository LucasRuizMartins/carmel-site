import React from 'react';
import { Button } from '../../ui/Button/Button';
import './Governance.css';

export const Governance: React.FC = () => {
    return (
        <section className="governance-section">
            <div className="governance-container">
                <div className="governance-content">
                    <h2 className="governance-title">Nossa governança</h2>
                    <p className="governance-description">
                        A Carmel Capital é regulada pela CVM - Comissão de Valores Mobiliários e aderente
                        aos códigos ANBIMA - Associação Brasileira das Entidades dos Mercados Financeiro
                        e de Capitais
                    </p>
                    <Button variant="green-inverted" size="md" onClick={() => window.location.href = '/governanca'}>
                        Saiba mais
                    </Button>
                </div>

                <div className="governance-badges">
                    <img
                        src="https://carmelcapital.com.br/imagens/selo1.jpg"
                        alt="Selo CVM"
                        className="governance-badge"
                    />
                    <img
                        src="https://carmelcapital.com.br/imagens/selo.jpg"
                        alt="Selo ANBIMA"
                        className="governance-badge"
                    />
                </div>
            </div>
        </section>
    );
};