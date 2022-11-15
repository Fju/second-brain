/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {
        fontFamily: {
            "sans": ['"IBM Plex Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            "mono": ['"IBM Plex Mono"', 'Menlo', '"DejaVu Sans Mono"', '"Bitstream Vera Sans Mono"', 'Courier', 'monospace']
        }
    },
  },
  plugins: [],
}
