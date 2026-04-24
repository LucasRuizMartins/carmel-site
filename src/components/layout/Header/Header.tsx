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

  // Detect current page for active state
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
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
              <a
                key={item.href}
                href={item.href}
                className={`header-nav-link ${currentPath === item.href ? 'header-nav-link--active' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm" onClick={onScheduleClick}>
              Agendar conversa
            </Button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="header-hamburger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`header-hamburger-bar ${mobileOpen ? 'header-hamburger-bar--top-open' : ''}`} />
            <span className={`header-hamburger-bar ${mobileOpen ? 'header-hamburger-bar--mid-open' : ''}`} />
            <span className={`header-hamburger-bar ${mobileOpen ? 'header-hamburger-bar--bot-open' : ''}`} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`header-overlay ${mobileOpen ? 'header-overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside className={`header-sidebar ${mobileOpen ? 'header-sidebar--open' : ''}`}>
        <div className="header-sidebar-top">
          <img
            src={`${BASE_URL}/imagens/header/logo-branco.png`}
            alt="Carmel Capital"
            className="header-sidebar-logo"
          />
          <button
            className="header-sidebar-close"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="header-sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`header-sidebar-link ${currentPath === item.href ? 'header-sidebar-link--active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-sidebar-footer">
          <Button variant="ghost" size="md" onClick={() => { onScheduleClick(); closeMenu(); }}>
            Agendar conversa
          </Button>
        </div>
      </aside>
    </>
  );
};
