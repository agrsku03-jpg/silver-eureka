import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { navy: '#102A43', bankblue: '#0f6fff', bankemerald: '#10b981' },
      boxShadow: { glow: '0 20px 80px rgba(16, 185, 129, .22)' },
      animation: { float: 'float 6s ease-in-out infinite', 'fade-up': 'fadeUp .75s ease-out both' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } }
      }
    }
  },
  plugins: []
};
export default config;
