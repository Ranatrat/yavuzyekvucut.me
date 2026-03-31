import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  // Buraya kendi temiz domainini yaz:
  site: 'https://yavuzyekvucut.me', 
  // Base kısmını boş bırakıyoruz veya '/' yapıyoruz:
  base: '/', 
  integrations: [tailwind()]
});
