module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customOrange: '#fe7318',
        customRed: '#0b2727',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(227,218,222,1) 10%, rgba(188,192,196,1) 87%)',
      },
      margin: {
        '100px': '100px',
      },
    },
  },
  plugins: [],
};
