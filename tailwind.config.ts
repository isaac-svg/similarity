import type { Config } from 'tailwindcss'
import {fontFamily} from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"
const config: Config = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        sans:["var(--font-inter)", ...fontFamily.sans]
      },
      colors:{
        ...colors,
        "light-gold":"#f5bc51",
        "dar-gold":"#533519",
      }
    },
    container:{
      center:true,
      padding:"1.5rem",
      screens:{
        "2xl":"1360px"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
