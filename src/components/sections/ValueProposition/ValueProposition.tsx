import React from 'react';
import './ValueProposition.css';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

interface ValuePropositionProps {
    title?: string;
    description: string;
    images: { src: string; alt: string }[];
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
    title = 'Como agregamos valor',
    description,
    images,
}) => {
    return (
        <section className="value-section">
            <div className="value-container">
                <div className="value-content">
                    <SectionTitle>{title}</SectionTitle>
                    <p className="value-description">{description}</p>
                </div>
                <div className="value-images">
                    {images.map((img, idx) => (
                        <img key={idx} src={img.src} alt={img.alt} className="value-image" />
                    ))}
                </div>
            </div>
        </section>
    );
};