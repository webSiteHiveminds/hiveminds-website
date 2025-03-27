/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': { 'max': '540px' },
      'tablet': { 'min': '541px', 'max': '1024px' }
    },
    extend: {
      colors: {
        primary: '#134bd5',
        body: '#111111',
        white1: '#FAFAFA',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite'
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' }
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      backgroundImage: {
        'grid-pattern': '',
        'grid-pattern-light': '',
      },
      transitionDuration: {
        '2000': '2000ms',
        '5000': '5000ms',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};