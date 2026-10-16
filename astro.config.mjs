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
  site: 'https://mathson17.github.io',
  base: '/vishnu-portfolio',
  integrations: [
    react(),
    sitemap(),
    robotsTxt({
      sitemap: ['https://vishnuvnair.com/sitemap-index.xml'],
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
    playformCompress({ HTML: false }),
    swup({
      theme: 'fade',
      smoothScrolling: true,
      animationClass: 'transition-',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});