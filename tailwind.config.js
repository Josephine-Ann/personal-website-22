module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px',
        'mid_mob': '360px',
        'stan_mob': '390px',
        'big_mob': '414px',
        'tab': '700px',
        'lan': '1000px',
        'xl': '1280px'
      },
    },
  },
  plugins: [],
}
