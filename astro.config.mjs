// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(), 
    UnoCSS({
      injectReset: true //browser style reset
    }),
  ],
  site: 'https://svartm.github.io',
  base: '/guess-the-color',
});
