# 🌿 Projeto Arara-Canindé — O Azul que o Brasil Está Perdendo

> **Landing Page de Alta Performance e Mobilização Social para a Conservação da Biodiversidade**

Este repositório contém a página de conscientização e captura de leads do **Projeto Arara-Canindé**. Desenvolvido com foco em performance extrema, design premium e SEO otimizado, o site serve como canal de mobilização para converter visitantes em apoiadores ativos da preservação da espécie Ara ararauna no Brasil.

---

## 🎨 Destaques do Projeto

*   **Experiência Imersiva (Above the Fold):** Vídeo em plano de fundo integrado a um layout com folhagem orgânica, overlays transparentes e cards flutuantes com dados reais sobre a perda do habitat e o tráfico silvestre.
*   **Design Premium (Glassmorphic):** Componentes estruturados sob uma paleta de cores inspirada na própria arara (azul profundo, amarelo ocre, terracota de alerta) e interfaces translúcidas translúcidas (liquid glass).
*   **Navegação Inteligente:** Menu de navegação responsivo de alta qualidade, adaptado para dispositivos móveis e tablets (telas de até 1024px) com animações fluidas via IntersectionObserver e controle de transições.
*   **SEO Perfeito & 100 no Lighthouse:** Código focado em semântica HTML5 pura, meta tags Open Graph completas, tags canônicas automáticas e zero JavaScript desnecessário por padrão, garantindo carregamento instantâneo.

---

## 🛠️ Tecnologias Utilizadas

*   **Core:** [Astro v6.4+](https://astro.build/) — Island Architecture para máxima eficiência.
*   **Estilização:** Vanilla CSS estruturado (Tokens em `variables.css`, utilitários em `utilities.css` e componentes estruturados).
*   **Linguagem:** TypeScript para tipagem segura nos templates Astro.
*   **Multimídia:** Background de vídeo de alta resolução integrado diretamente no ciclo de carregamento e renderização dinâmica das transições da UI.

---

## 📂 Estrutura do Código

```text
arara-caninde/
├── src/
│   ├── components/          # Elementos e Seções da Landing Page
│   │   ├── Navbar.astro     # Cabeçalho responsivo com menu hambúrguer interativo
│   │   ├── Hero.astro       # Seção hero imersiva com vídeo e cards informativos
│   │   ├── Footer.astro     # Rodapé do site
│   │   └── ...              # Outros componentes estruturais (FAQ, CTA, etc.)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Layout com tags SEO, viewport e metadados
│   │   └── LandingLayout.astro # Layout com navbar e footer estruturados
│   └── styles/
│       ├── variables.css    # Design Tokens (cores, espaçamentos, fontes)
│       ├── reset.css        # Reset global de estilos
│       ├── utilities.css    # Classes utilitárias do layout
│       └── components.css   # Estilos base de botões, cards e overlays
├── public/                  # Vídeos, fontes, imagens e favicon estáticos
├── astro.config.mjs         # Configurações do framework Astro
└── tsconfig.json            # Configuração do TypeScript
```

---

## 🚀 Como Iniciar Localmente

### Pré-requisitos
Certifique-se de possuir o **Node.js** instalado localmente (versão `>= 22.12.0`).

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL gerada (geralmente [http://localhost:4321](http://localhost:4321)) no seu navegador.

3. **Gere a build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos estáticos otimizados serão criados na pasta `/dist`.

---

## 🌿 Sobre a Causa

A **arara-canindé** (*Ara ararauna*), símbolo vivo da Amazônia e do Pantanal, enfrenta uma iminente ameaça devido ao desmatamento contínuo e ao tráfico de animais silvestres. Este projeto visa unificar tecnologia e design para amplificar a voz das iniciativas de preservação e construir uma base engajada de defensores da fauna brasileira.
