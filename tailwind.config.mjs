/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        portfolio: {
          vintage: {
            bg: '#1a1714',
            text: '#f7f4ef',
            nav: '#bcaaa0',
            navHover: '#ffffff',
            border: '#4a3e36',
          },
          white: {
            bg: '#fdfcfb',
            text: '#1a1714',
            nav: '#8c7e75',
            navHover: '#111111',
            border: '#e5e0d8',
          },
        },
      },
      aspectRatio: {
        '2/3': '2 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [
    // Tailwind'e "light:" ön ekini (prefix) resmi olarak öğretiyoruz
    function({ addVariant }) {
      addVariant('light', '.light &');
    }
  ],
}
