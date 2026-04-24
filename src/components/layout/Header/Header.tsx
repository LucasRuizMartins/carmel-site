import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BASE_URL } from '../../../constants';
import { Button } from '../../ui/Button/Button';
import './Header.css';

interface HeaderProps {
  onScheduleClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : 'header--default'}`}>
      <div className="header-inner">
        <a href="/home">
          <img
            src={scrolled
              ? `${BASE_URL}/imagens/header/logo-branco.png`
              : `${BASE_URL}/imagens/header/logo1.png`}
            alt="Carmel Capital"
            className="header-logo"
          />
        </a>

        {/* Desktop nav */}
        <nav className="header-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="header-nav-link">
              {item.label}
            </a>
          ))}
          <Button variant="outline" size="sm" onClick={onScheduleClick}>
            Agendar conversa
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button className="header-hamburger" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Menu">
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line--last" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="header-mobile-menu">
          <nav className="header-mobile-nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="header-mobile-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm" onClick={onScheduleClick}>
              Agendar conversa
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
