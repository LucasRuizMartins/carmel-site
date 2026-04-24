import React from 'react';
import './Differentials.css';

interface Differential {
    iconSrc: string;
    title: string;
    description: string;
}

interface DifferentialsProps {
    title?: string;
    subtitle?: string;
    items: Differential[];
}

export const Differentials: React.FC<DifferentialsProps> = ({
    title = 'Nossos Diferenciais',
    subtitle,
    items,
}) => {
    return (
        <section className="diff-section">
            <div className="diff-container">
                <div className="diff-header">
                    <h2 className="diff-title">{title}</h2>
                    {subtitle && <p className="diff-subtitle">{subtitle}</p>}
                </div>
                <div className="diff-grid">
                    {items.map((item, idx) => (
                        <div key={idx} className="diff-card">
                            <div className="diff-icon-wrapper">
                                <img src={item.iconSrc} alt={item.title} className="diff-icon" />
                            </div>
                            <h4 className="diff-card-title">{item.title}</h4>
                            <p className="diff-card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};