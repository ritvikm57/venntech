import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        'navy-light': '#1a3a52',
        'steel-dark': '#374151',
        'steel-light': '#6B7280',
        'off-white': '#F9FAFB',
        teal: '#0E7490',
        'teal-light': '#14B8A6',
        orange: '#EA580C',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
