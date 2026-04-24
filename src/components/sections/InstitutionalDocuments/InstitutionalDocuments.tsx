import React from 'react';
import { Button } from '../../ui/Button/Button';
import './InstitutionalDocuments.css';

export const InstitutionalDocuments: React.FC = () => {
    return (
        <section className="docs-section">
            <div className="docs-container">
                <div className="docs-image-wrapper">
                    <img
                        src="https://carmelcapital.com.br/imagens/sobre/baixe-documentos.png"
                        alt="Documentos institucionais"
                        className="docs-image"
                    />
                </div>

                <div className="docs-content">
                    <h2 className="docs-title">Documentos institucionais</h2>
                    <p className="docs-description">
                        Descubra como podemos ajudar com os critérios corretos!
                    </p>
                    <div className="docs-buttons">
                        <Button
                            variant="green-outline"
                            size="md"
                            onClick={() => window.location.href = '/documentos-livres'}
                        >
                            Documentos Livres
                        </Button>
                        <Button
                            variant="green-inverted"
                            size="md"
                            onClick={() => window.location.href = '/documentos-regulatorios'}
                        >
                            Documentos Regulatórios
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};