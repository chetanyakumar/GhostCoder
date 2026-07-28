module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#9d4edd', // vibrant purple accent
        secondary: '#2b2d42', // dark background hue
        accent: '#f5f5f5',
      },
      backdropBlur: { xs: '2px' },
      backgroundImage: {
        circuit: "url('/src/assets/circuit-bg.svg')",
      },
    },
  },
  plugins: [],
};
