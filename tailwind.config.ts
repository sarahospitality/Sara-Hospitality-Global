import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#f26d35',
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbd9c0',
          300: '#f8c4a0',
          400: '#f5af80',
          500: '#f26d35',
          600: '#e55a2b',
          700: '#d84721',
          800: '#cb3417',
          900: '#be210d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
