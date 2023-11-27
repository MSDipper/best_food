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
      xxs: "375px",
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
      colors: {
        light: '#EFE9E9',
        logo: '#87D200',
        logoShadow: '#000025',
        greenBorder: '#537A0D',
        primary: '#13AC51',
        secondary: '#129B4C',
        accent: '#05B6CE',
        bg: '#00010B',
        bgSun: '#f4f3f3',
        blueGrey: '#143C4D',
        shadowImage: '#000000b6',
        darkSky: '#0369a1',
        button: '#15BF5AE5',
        postButton: '#24BF63',
        roundBlock: '#143C4DAB',
        footerBg: '#000000',
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
