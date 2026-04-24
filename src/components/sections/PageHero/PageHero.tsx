import React from 'react';
import './PageHero.css';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    imageSrc,
    imageAlt = 'banner',
}) => {
    return (
        <section className="page-hero">
            <img src={imageSrc} alt={imageAlt} className="page-hero__bg" />
            <div className="page-hero__overlay" />
            <div className="page-hero__content">
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
};