const { join } = require('path');


module.exports = {
  content: [
    "./pages/**/*.{jsx,js}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px',
        'mid_mob': '360px',
        'stan_mob': '390px',
        'tab': '700px',
        'lan': '1000px'
      },
    },
  },
  plugins: [],
}
