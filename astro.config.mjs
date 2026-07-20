import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tuinkassen-zeeland.vercel.app',
  vite: { plugins: [tailwind()] },
});
