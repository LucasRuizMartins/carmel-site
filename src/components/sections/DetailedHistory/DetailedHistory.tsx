import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import './DetailedHistory.css';

export const DetailedHistory: React.FC = () => {
  return (
    <section className="detailed-history-section">
      <div className="detailed-history-container">
        <SectionTitle className="mb-8">Nossa história</SectionTitle>
        
        <p className="detailed-history-intro">
          Nossa jornada é um testemunho de evolução, aprendizado e conquistas, moldando a maneira
          como entregamos valor e excelência aos nossos clientes.
        </p>

        <div className="history-timeline">
          
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-year">2016</h4>
              <p className="timeline-text">
                A Gestora foi constituída, em 22 de março de 2016, tendo como objeto social o exercício 
                profissional de administração de carteiras de valores mobiliários. Inicialmente, foi 
                criada com objetivo de desenvolvimento da operação do grupo Sul Brasil.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-year">2022</h4>
              <p className="timeline-text">
                Em meados de 2022, dois sócios dedicados ao grupo Sul Brasil decidiram focar exclusivamente 
                nas operações do grupo e o controle da gestora passou a ser exclusivamente do sócio 
                cofundador e remanescente Ademir Oliveira que convidou o Alexandre Jorge Chaia.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-year">Reestruturação</h4>
              <p className="timeline-text">
                Reconfiguração societária e reformulação da marca sob a identidade de Carmel Capital, 
                bem como, criação de novos serviços.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="timeline-year">Passamos de 3 Bilhões</h4>
              <p className="timeline-text">
                Já com a nova configuração a Carmel atinge 3 bilhões de patrimônio sob gestão; 
                A Carmel se credencia para distribuição de cotas de fundos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
