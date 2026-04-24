# Carmel Capital - Frontend React

Reprodução fiel do site [carmelcapital.com.br](https://carmelcapital.com.br) em React + TypeScript + Tailwind CSS.

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilização
- **Vite** como bundler
- Sem dependências externas desnecessárias

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navbar fixo com scroll behavior
│   │   └── Footer.tsx        # Footer com mapa do site
│   ├── sections/
│   │   ├── HeroSlider.tsx    # Banner carrossel
│   │   ├── WhoAreYou.tsx     # Seção "Quem é você?"
│   │   ├── Metrics.tsx       # Números da empresa
│   │   ├── Funds.tsx         # Accordion de fundos
│   │   ├── Partners.tsx      # Carrossel de parceiros (marquee)
│   │   ├── History.tsx       # Nossa história com colagem
│   │   ├── ScheduleSection.tsx  # CTA agendar conversa
│   │   └── ScheduleModal.tsx    # Modal de contato
│   └── ui/
│       ├── Button.tsx        # Botão reutilizável (primary/outline/ghost)
│       ├── Modal.tsx         # Modal genérico
│       └── SectionTitle.tsx  # Título de seção padronizado
├── constants/
│   └── index.ts             # Todos os dados estáticos centralizados
├── hooks/
│   ├── useSlider.ts         # Hook de carrossel com autoplay
│   └── useModal.ts          # Hook de modal com ESC + scroll lock
├── types/
│   └── index.ts             # Interfaces TypeScript
├── App.tsx                  # Composição das seções
├── main.tsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
npm run preview
```

## Princípios aplicados

- **Clean Code**: cada componente tem responsabilidade única
- **DRY**: dados centralizados em `constants/`, lógica em `hooks/`
- **Type Safety**: TypeScript estrito em todo o projeto
- **Reutilização**: `Button`, `Modal`, `SectionTitle` são genéricos e reutilizáveis
- **Performance**: imagens lazy, CSS transitions em vez de JS animations
