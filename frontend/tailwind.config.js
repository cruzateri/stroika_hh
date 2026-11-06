/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F6F6F4',
        surface: '#FFFFFF',
        'surface-muted': '#F4F4F4',
        foreground: '#0A0A0C',
        muted: {
          DEFAULT: '#8E8E96',
          dark: '#808080',
        },
        accent: {
          DEFAULT: '#FF5A20',
          hover: '#E4521E',
          foreground: '#FFFFFF',
        },
        button: {
          DEFAULT: '#FF5A20',
          hover: '#E4521E',
          dark: '#0A0A0C',
          'dark-hover': '#1A1A1E',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#0A0A0C',
          'dark-inner': '#18161C',
        },
        footer: {
          DEFAULT: '#0A0A0C',
          muted: '#808080',
          heading: '#FF5A20',
        },
        border: {
          DEFAULT: '#E8E8E8',
          dark: '#2A2A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        h3: ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        container: '80rem',
      },
      spacing: {
        section: '6rem',
        'section-sm': '5rem',
        card: '2rem',
        'card-sm': '1.5rem',
      },
      borderRadius: {
        card: '1rem',
        button: '0.5rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(10 10 12 / 0.05)',
        'card-hover':
          '0 10px 15px -3px rgb(10 10 12 / 0.1), 0 4px 6px -4px rgb(10 10 12 / 0.1)',
      },
    },
  },
  plugins: [],
}
