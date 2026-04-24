import React from 'react';
import './ValueProposition.css';

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
                    <h2 className="value-title">{title}</h2>
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