import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#F4909A',
          deep: '#E8727D',
          light: '#F9BEC3',
          pale: '#FDE8EA',
          bg: '#FEF3F4',
        },
        cream: '#FFFBFB',
        charcoal: {
          DEFAULT: '#2D2A2B',
          light: '#3D3839',
        },
        mid: '#8A7F80',
        dim: '#C8BFC0',
        health: {
          bg: '#E8F4E9',
          text: '#3A7B3E',
        },
        warning: {
          bg: '#FEF3E2',
          text: '#B8770A',
        },
      },
      fontFamily: {
        display: [
          'var(--font-nunito)',
          'var(--font-noto-jp)',
          'var(--font-noto-kr)',
          'sans-serif',
        ],
        body: [
          'var(--font-nunito-sans)',
          'var(--font-noto-jp)',
          'var(--font-noto-kr)',
          'sans-serif',
        ],
      },
      fontSize: {
        display: [
          '60px',
          { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '900' },
        ],
        'display-mobile': [
          '36px',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' },
        ],
        h1: [
          '36px',
          { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '800' },
        ],
        h2: ['22px', { lineHeight: '1.3', fontWeight: '700' }],
      },
      borderRadius: {
        card: '22px',
        input: '14px',
        pill: '100px',
      },
      boxShadow: {
        button: '0 4px 16px rgba(244,144,154,0.35)',
        card: '0 4px 20px rgba(244,144,154,0.1)',
        dropdown: '0 4px 20px rgba(244,144,154,0.15)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '160ms',
        normal: '300ms',
        slow: '480ms',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
