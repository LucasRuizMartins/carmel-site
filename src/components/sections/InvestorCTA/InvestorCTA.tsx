import React from 'react';
import { Button } from '../../ui/Button/Button';
import './InvestorCTA.css';

interface InvestorCTAProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    onSchedule?: () => void;
}

export const InvestorCTA: React.FC<InvestorCTAProps> = ({
    title = 'Seja um investidor',
    description = 'Fale com um especialista e ganhe orientações especiais!',
    imageSrc = 'https://carmelcapital.com.br/imagens/investidores/seja-investidor.png',
    onSchedule,
}) => {
    return (
        <section className="investor-cta-section">
            {/* background */}
            <img
                src={imageSrc}
                alt=""
                className="investor-cta-bg"
            />

            {/* overlay gradiente */}
            <div className="investor-cta-overlay" />

            {/* conteúdo */}
            <div className="investor-cta-container">
                <div className="investor-cta-content">
                    <h2 className="investor-cta-title ml-2">{title}</h2>
                    <p className="investor-cta-description ml-10">{description}</p>
                    <Button variant="green-inverted" size="lg" onClick={onSchedule} className="ml-10">
                        Agende uma conversa
                    </Button>
                </div>
            </div>
        </section>
    );
};