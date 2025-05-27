import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-800': '#1f2e4b', // Dark blue
        'blue-600': '#2f669a', // Medium blue
        'blue-200': '#a9d0f5', // Light blue
        'gray-50': '#f8fafc',
        'gray-200': '#e2e8f0',
        'gray-300': '#cbd5e1',
        'gray-700': '#4b5563',
        'gray-900': '#111827',
      },
      fontFamily: {
        sans: ['"Tajawal"', 'sans-serif'], // Example for Arabic font, you might need to import it
      },
    },
  },
  plugins: [],
};
export default config;