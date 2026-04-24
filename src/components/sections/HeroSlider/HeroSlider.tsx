import React from 'react';
import { HERO_SLIDES } from '../../../constants';
import { useSlider } from '../../../hooks/useSlider';
import './HeroSlider.css';

export const HeroSlider: React.FC = () => {
  const { current, goTo } = useSlider({ total: HERO_SLIDES.length });

  return (
    <section className="hero-section hidden lg:block">
      {HERO_SLIDES.map((src, index) => (
        <div
          key={src}
          className={`hero-slide ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={src} alt={`Banner ${index + 1}`} className="hero-slide-img" />
          <div className="hero-slide-overlay" />
        </div>
      ))}

      {/* Dots */}
      <div className="hero-dots-wrapper">
        <div className="hero-dots-list">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Slide ${index + 1}`}
              className={`hero-dot-btn ${index === current ? 'border-[2px] border-[#179D6A]' : ''
                }`}
            >
              <span
                className={`hero-dot-inner ${index === current ? 'bg-[#179D6A]' : 'bg-white/60 hover:bg-white'
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Book Effect Transition */}
      <div className="hero-book-effect">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="hero-book-svg"
        >
          <path
            d="M0,100 Q450,100 500,0 Q550,100 1000,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
