import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian:   '#1C1917',
        terracotta: '#C8512A',
        limestone:  '#E7DED2',
        ghost:      '#7C6A58',
        card:       '#D4CAB8',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
    },
  },
  plugins: [],
}

export default config
