import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: "320px",
      sx: "425px",
      sm: '640px',
      md: '769px',
      lg: '1025px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cat1': "url(/categories/cat1.jpg)",
        'cat2': "url(/categories/cat2.jpg)",
        'cat3': "url(/categories/cat3.jpg)",
      },
    },
  },

  fontFamily: {
    'sans': ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
  },
  plugins: [
  ],
}
export default config
