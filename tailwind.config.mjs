/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        obsidian: '#070708',
        surface: '#0D0D0F',
        borderSubtle: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.2)',
        muted: '#8E8E93',
        subtle: '#52525A',
      },
    },
  },
  plugins: [],
};