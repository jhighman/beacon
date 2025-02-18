import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: "class", // ✅ Ensure Tailwind dark mode is applied via class
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdoc,css}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdoc,css}',
    './components/**/*.{js,ts,jsx,tsx,md,mdoc,css}',
    './src/**/*.{js,ts,jsx,tsx,md,mdoc,css}',
    './markdoc/**/*.{js,ts,jsx,tsx,md,mdoc,css}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          DEFAULT: '#635bff',
          dark: '#32325d'
        },
        gray: {
          '50': '#F9FBFC',
          '100': '#F6F9FC',
          '700': '#424770'
        },
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
