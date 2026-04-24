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
            <div className="investor-cta-container">
                <div className="investor-cta-image-wrapper">
                    <img src={imageSrc} alt="Seja um investidor" className="investor-cta-image" />
                </div>
                <div className="investor-cta-content">
                    <h2 className="investor-cta-title">{title}</h2>
                    <p className="investor-cta-description">{description}</p>
                    <Button variant="primary" size="lg" onClick={onSchedule}>
                        Agende uma conversa
                    </Button>
                </div>
            </div>
        </section>
    );
};