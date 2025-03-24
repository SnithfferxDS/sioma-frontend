// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  site: process.env.CI
    ? 'http://192.168.9.201'
    : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/' : undefined,
  // server: {
  //   /* Dev. server only */
  //   port: DEV_PORT,
  // },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});