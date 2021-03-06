module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'grey-blue': '#2c3e50',
      'green': '#42b983',
      'green2': '#00bc77',
      'gray-light': '#ccc',
      'gray-dark': '#222',
      'dark-blue': '#12002b',
      'error': '#e74c3c',
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '16px': '16px',
      '0.9': '0.9rem',
      '1': '1rem',
      '1.1': '1.1rem',
      '1.2': '1.2rem',
      '1.25': '1.25rem',
      '1.5': '1.5rem',
      '2.5': '2.5rem',
      '5': '5rem',
    },
    backgroundPosition: {
      hero: '0 -50px',
      hero2: '0% 33%',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '10': '10px',
    },
    screens: {
      'custom-720': '720px',
      'custom-920': '920px',
    },
    extend: {
      spacing: {
        '80vw': '80vw',
      }
    },
  },
  plugins: [],
}
