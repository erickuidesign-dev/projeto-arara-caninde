# 🚀 astro-base — Base Profissional para Landing Pages

Base completa com Astro para criação de landing pages e sites institucionais com performance máxima e SEO perfeito.

## Por que Astro?

- **Zero JS por padrão** — HTML puro, carregamento instantâneo
- **SEO nativo** — meta tags, OG, canonical em cada página
- **Island Architecture** — adicione React/Vue/Svelte apenas onde precisar
- **100 no Lighthouse** — performance, acessibilidade, SEO, boas práticas

## Como iniciar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Gera /dist com HTML estático
npm run preview  # Preview do build local
```

## Estrutura

```
astro-base/
├── src/
│   ├── components/          # Seções reutilizáveis
│   │   ├── Navbar.astro     # Navbar sticky com scroll effect
│   │   ├── Hero.astro       # Seção hero com gradientes e grid
│   │   ├── Features.astro   # Grid de recursos/funcionalidades
│   │   ├── Stats.astro      # Números/estatísticas de impacto
│   │   ├── Pricing.astro    # Planos de preço com destaque
│   │   ├── Testimonials.astro # Depoimentos de clientes
│   │   ├── FAQ.astro        # Accordion de perguntas frequentes
│   │   ├── CTA.astro        # Chamada para ação final
│   │   └── Footer.astro     # Rodapé com colunas de links
│   ├── layouts/
│   │   ├── BaseLayout.astro    # HTML base com SEO completo
│   │   └── LandingLayout.astro # Layout completo (Navbar + Footer + Scripts)
│   ├── pages/
│   │   ├── index.astro      # Landing page principal
│   │   ├── sobre.astro      # Página institucional
│   │   ├── contato.astro    # Formulário de contato
│   │   └── 404.astro        # Página não encontrada
│   └── styles/
│       ├── variables.css    # EDITE AQUI — Tokens do design
│       ├── reset.css        # Reset + base
│       ├── utilities.css    # Classes utilitárias
│       ├── components.css   # Estilos de componentes
│       └── global.css       # Entry point (importa tudo)
├── astro.config.mjs         # Configuração do Astro
└── .env.example             # Template de variáveis de ambiente
```

## Personalizar o visual

Edite **`src/styles/variables.css`**:

```css
:root {
  --color-primary: hsl(250, 80%, 62%); /* Sua cor principal */
  --color-accent:  hsl(170, 70%, 45%); /* Cor de destaque   */
}
```

## Criar uma nova landing page

```astro
---
import LandingLayout from '../layouts/LandingLayout.astro';
import Hero          from '../components/Hero.astro';
import Features      from '../components/Features.astro';
import CTA           from '../components/CTA.astro';
---

<LandingLayout title="Minha Nova LP" description="Descrição aqui">
  <Hero
    title="Meu título <span class='text-gradient'>incrível</span>"
    subtitle="Meu subtítulo de conversão"
    ctaPrimary={{ label: 'Começar →', href: '#' }}
  />
  <Features items={[...]} />
  <CTA title="Pronto para começar?" />
</LandingLayout>
```

## Adicionar React (opcional)

```bash
npx astro add react
```

## Scripts

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor local em `localhost:4321` |
| `npm run build` | Build estático em `/dist` |
| `npm run preview` | Preview do build |
| `npm run astro` | CLI do Astro |
