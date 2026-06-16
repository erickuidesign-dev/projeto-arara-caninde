// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL de produção — importante para SEO e sitemap
  site: 'https://meusite.com',

  // Pasta de saída do build
  outDir: './dist',

  // Compressão de HTML
  compressHTML: true,

  build: {
    // Formato dos assets
    assets: 'assets',
  },

  // Para adicionar React/Vue/Svelte:
  // integrations: [react()],
  // Execute: npx astro add react
});
