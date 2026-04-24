import React from 'react';
import { FOOTER_NAV, BASE_URL } from '../../../constants';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Logo */}
          <div className="col-span-1">
            <a href="/home">
              <img src={`${BASE_URL}/imagens/header/logo-footer.png`} alt="Carmel Capital" className="footer-logo" />
            </a>
          </div>

          {/* Mapa do site */}
          <div>
            <h4 className="footer-nav-title">Mapa do site</h4>
            <ul className="footer-nav-list">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="footer-nav-link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="footer-nav-title">Contato</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="tel:1134750176" className="footer-nav-link">(11) 3475-0176</a>
              </li>
              <li>
                <a href="mailto:contato@carmelcapital.com.br" className="footer-nav-link">
                  contato@carmelcapital.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="footer-nav-title">Endereço</h4>
            <a
              href="https://goo.gl/maps/5okCQiEJhYFEhrP79"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-link"
            >
              Avenida Paulista, 1009 - 2010, Bela Vista,<br />
              São Paulo - SP<br />
              CEP: 01311-919
            </a>
          </div>
        </div>

        {/* Selos */}
        <div className="footer-seals">
          <img src={`${BASE_URL}/imagens/selo1.jpg`} alt="Selo" className="footer-seal-img" />
          <img src={`${BASE_URL}/imagens/selo.jpg`} alt="Selo" className="footer-seal-img" />
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2023 Carmel Capital - Todos os direitos reservados</p>
          <a href="/documentos-regulatorios" className="footer-privacy-link">
            Política de Privacidade &amp; Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};
