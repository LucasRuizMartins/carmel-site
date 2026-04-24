import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { VerticalLine } from '../../ui/VerticalLine/VerticalLine';
import './QuemSomosIntro.css';
export const QuemSomosIntro: React.FC = () => {
  return (
    <section className="quem-somos-intro-section">
      {/* 1. O Banner Superior (Título e Descrição do Banner) */}
      <div className="quem-somos-intro-container-top-banner">
        <div className="quem-somos-intro-title-wrapper">
          <VerticalLine className="h-12 lg:h-16" />
          <SectionTitle className='py-10'>Quem somos</SectionTitle>
        </div>
        <p className="quem-somos-intro-description-banner">
          Carmel Capital - Sócios com mais de 30 anos de <br className="hidden md:block" />
          experiência no Mercado Financeiro.
        </p>
      </div>

      {/* 2. O Novo Conteúdo (Dois Pilares: Texto e Imagem com Arco) */}
      <div className="quem-somos-content-wrapper">

        {/* Coluna da Esquerda: O Título Grande e a Descrição do Perfil */}
        <div className="quem-somos-text-column">
          <div className="quem-somos-main-title-wrapper">
            <VerticalLine className="h-20 mt-10" /> {/* Linha bem grande para o título quebrado */}
            <h1 className="quem-somos-main-title">
              Quem <br /> somos
            </h1>
          </div>

          <p className="quem-somos-profile-description">
            A Carmel Capital é uma gestora de recursos independentes, com o objetivo de desenvolver soluções financeiras personalizadas aos perfis de investidores e diferentes tipos de empresas.
          </p>
        </div>

        {/* Coluna da Direita: A Imagem com o Arco Arredondado */}
        <div className="quem-somos-image-column">
          <div className="quem-somos-image-arco-container">
            <img
              src={"https://carmelcapital.com.br/imagens/home/imagem-colagem-2.png"}
              alt="Prédio espelhado da Carmel Capital"
              className="quem-somos-image-arco"
            />
          </div>
        </div>

      </div>
    </section>
  );
};