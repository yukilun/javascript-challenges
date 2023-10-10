/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
        'heading': ['Fjalla One', ...defaultTheme.fontFamily.sans],
        "accent": ['Lobster', ...defaultTheme.fontFamily.serif]
      },
      aspectRatio: {
        '3/2': '3 / 2'
      },
      height: {
        'dynamic-screen': ['100vh', '100dvh']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

