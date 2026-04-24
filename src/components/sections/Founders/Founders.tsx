import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './Founders.css';

const FOUNDERS = [
  {
    name: 'Alexandre Jorge Chaia',
    imageSrc: 'https://carmelcapital.com.br/admin/files/equipe/5257350fd3278cece79f3972f282c71f0afe4c7.jpg',
    bio: 'Certificação CGA-Anbima e CCA-IBGC, é o responsável pela gestão de recursos de terceiros. Economista, Mestre em Administração de Empresas pela FEA/USP e MBA Finanças pelo IBMEC/SP, experiência de mais de 30 anos no mercado financeiro e de capitais, atuando como superintendente de tesouraria e diretor de gestão de riscos de instituições financeiras (Banco Interunion e ABN ANRO Bank). Sócio fundador da Artesanal Investimentos em 2008, responsável pelas diretorias de gestão de recursos de terceiros e compliance e risco, respectivamente. Em 2022 integrou a Carmel Gestora. Professor no INSPER/IBMEC desde 1997, nas matérias de derivativos, gestão de riscos financeiros, produtos bancários e carteira administradas nos programas de Pós-Graduação, MBA Finanças, CFM e LLM.',
  },
  {
    name: 'Ademir Silva Oliveira',
    imageSrc: 'https://carmelcapital.com.br/admin/files/equipe/3518794de490c64677b8c2d854555b23edea9ba.jpg',
    bio: 'Sócio cofundador, sócio/diretor, é o responsável pela área comercial e de novos negócios. Contador e MBA em Economia do Setor Financeiro pela FIPE/USP, experiência de mais de 30 anos no mercado financeiro e de capitais, com forte atuação em estruturação, registro e constituição de fundos de investimento para o segmento de operações estruturadas (FIDC, FIP e FII). Em 1991, iniciou a carreira no Banco Bradesco. Em 2008, ingressou no Banco Paulista como responsável pela Custódia de Fundos.',
  },
  {
    name: 'Guaraci Sillos Moreira',
    imageSrc: 'https://carmelcapital.com.br/admin/files/equipe/56637948446df2521a16cdabb992a6c54fd2f5.jpg',
    bio: 'Sócio, responsável pelas áreas de risco, compliance/pldft e jurídico. Advogado, MBA em Direito Empresarial, Compliance e Governança Corporativa. Iniciou a carreira em 2005 no Banco Bradesco. Em 2008 ingressou no HSBC como coordenador jurídico, e em 2010 ingressou na Corretora Petra atuando como gerente jurídico, onde participou ativamente na criação do Banco Petra. Expertise em direito empresarial, societário, cível, processo civil, contencioso e regulatório. Experiência de mais de 18 anos no mercado financeiro e de capitais.',
  },
];

export const Founders: React.FC = () => {
  return (
    <section className="founders-section">
      <div className="founders-container">
        <SectionTitle className="mb-16">Sócios Fundadores Carmel Capital</SectionTitle>

        <div className="founders-grid">
          {FOUNDERS.map((founder, idx) => (
            <div key={idx} className="founder-card">
              <div className="founder-img-wrapper">
                <img src={founder.imageSrc} alt={founder.name} className="founder-img" />
              </div>
              <div className="founder-body">
                <h4 className="founder-name">{founder.name}</h4>
                <p className="founder-bio">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};