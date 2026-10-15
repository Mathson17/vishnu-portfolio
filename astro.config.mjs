// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import playformCompress from '@playform/compress';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://vishnuvnair.com',
  integrations: [
    react(),
    sitemap(),
    robotsTxt(),
    playformCompress(),
    swup(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});