module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7c3aed',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
