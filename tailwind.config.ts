import type { Config } from 'tailwindcss'


const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      black:        colors.black,
      white:        colors.white,
      gray:         colors.gray,
      'jppurple': {
         dark:    '#400287',
         DEFAULT: '#7517CE',
         light:   '#A07EFF',

      }
    },
    fontSize:{
      xs:['10px','14px'],
      sm:['12px','18px'],
      xl1:['94px','125px'],
      xl2:['92px','120px']
    }
  },
}
export default config
