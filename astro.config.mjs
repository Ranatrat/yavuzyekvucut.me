import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  
  // Sitenin internetteki ana adresi (Senin GitHub kullanıcı adınla)
  site: 'https://Ranatrat.github.io',
  
  // Repository (depo) adın. Başına ve sonuna / koymalısın.
  base: '/yavuzyekvucut.me',
  
  integrations: [tailwind()]
});
