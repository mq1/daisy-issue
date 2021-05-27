import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'
import daisyColors from 'daisyui/colors/windi'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      colors: daisyColors,
    },
  },
  plugins: [
    transform('daisyui'),
  ],
})