import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Sitenin ana klasörde değil, bir alt klasörde olduğunu belirtiyoruz
  output: 'static',
  site: 'https://Ranatrat.github.io',
  base: '/yavuzyekvucut.me/', // Sonundaki / işareti çok önemli!
  integrations: [tailwind()]
});
