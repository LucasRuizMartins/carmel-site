import React from 'react';
import { PageHero } from '../../components/sections/PageHero/PageHero';
import { ValueProposition } from '../../components/sections/ValueProposition/ValueProposition';
import { Differentials } from '../../components/sections/Differentials/Differentials';
import { Funds } from '../../components/sections/Funds/Funds';
import { Metrics } from '../../components/sections/Metrics/Metrics';
import { InvestorCTA } from '../../components/sections/InvestorCTA/InvestorCTA';

const DIFFERENTIALS = [
    {
        iconSrc: 'https://carmelcapital.com.br/admin/files/diferenciais/original_2591804c70a25308a4bed5e6d04858fadcf534b.png',
        title: 'Ambiente Acadêmico',
        description: 'Mais de 25 anos atuando nas melhores escolas de negócios do Brasil, como Insper, FGV, FEA e USP. Desenvolvimento de dissertação em gestão de risco de crédito com mais de 20 mil visitas e 31 mil downloads.',
    },
    {
        iconSrc: 'https://carmelcapital.com.br/admin/files/diferenciais/5649159cc3c58b684e1e279411494e82a000c6b.png',
        title: 'Estruturação de Fundos Especiais',
        description: 'Os Sócios da Carmel Capital já estruturaram mais de 400 fundos de investimentos ao longo de suas carreiras.',
    },
    {
        iconSrc: 'https://carmelcapital.com.br/admin/files/diferenciais/5067894bbf7abc4178b4887b474e120d052f542.png',
        title: 'Fundos de Crédito',
        description: 'Foco na criação de FIDCs - Fundo de Investimento de Direito Creditório ao longo das décadas de atuação no mercado financeiro.',
    },
    {
        iconSrc: 'https://carmelcapital.com.br/admin/files/diferenciais/2687330890575ce2afb309e582eac16b16ccd62.png',
        title: 'Simulador de Rentabilidade',
        description: 'Acesse governança, vá em documentos livres, baixe nosso simulador de rentabilidade e realize a simulação de investimentos.',
    },
];

const VALUE_IMAGES = [
    { src: 'https://carmelcapital.com.br/imagens/investidores/imagem-colagem-1.png', alt: 'Colagem 1' },
    { src: 'https://carmelcapital.com.br/imagens/investidores/imagem-colagem-2.png', alt: 'Colagem 2' },
];

export const InvestidoresPage: React.FC = () => {
    return (
        <>
            <PageHero
                title="Sou investidor"
                subtitle="Investidores qualificados que buscam fundos de investimentos fora do portfólio tradicional oferecido pelas grandes instituições financeiras."
                imageSrc="https://carmelcapital.com.br/imagens/investidores/banner-sem-gradient.png"
            />
            <ValueProposition
                description="Com mais de 30 anos de experiência no mercado financeiro brasileiro, a Carmel Capital oferece aos seus clientes soluções diferenciadas por meio de fundos de investimentos e operações estruturadas, tais como, otimização tributária, redução de custo financeiro, fidelização de fornecedores, melhoria de fluxo de caixa, antecipações de tendências além do amplo relacionamento com agentes do mercado. Tudo isso, em uma casa experiente, que conta com a criação de mais de 400 fundos de investimentos e operações estruturadas."
                images={VALUE_IMAGES}
            />
            <Differentials
                subtitle="Os sócios possuem um sólido relacionamento com os agentes do mercado financeiro, mais de 30 anos de experiência no mercado financeiro e mais de 400 fundos de investimentos e operações estruturadas."
                items={DIFFERENTIALS}
            />
            <Funds />
            <Metrics />
            <InvestorCTA onSchedule={() => { /* abrir modal */ }} />

        </>
    );
};