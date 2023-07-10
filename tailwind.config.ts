/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'base03':    '#002b36',
        'base02':    '#073642',
        'base01':    '#586e75',
        'base00':    '#657b83',
        'base0':     '#839496',
        'base1':     '#93a1a1',
        'base2':     '#eee8d5',
        'base3':     '#fdf6e3',
        'yellow':    '#b58900',
        'orange':    '#cb4b16',
        'red':       '#dc322f',
        'magenta':   '#d33682',
        'violet':    '#6c71c4',
        'blue':      '#268bd2',
        'cyan':      '#2aa198',
        'green':     '#859900',
        'bgDark':    colors.base03,
        'bsLight':   colors.base3,
        'textDark':  colors.base1,
        'textLight':  colors.base01,
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}