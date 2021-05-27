import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      colors: require('daisyui/colors/windi'),
    },
  },
  plugins: [
    transform('daisyui'),
  ],
})