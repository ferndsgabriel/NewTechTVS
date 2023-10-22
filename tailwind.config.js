/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':"#080390"
      },
      height:{
        'nav':"calc(100vh - 80px)"
      },
      keyframes:{
        'hand':{
          '0%':{
            opacity:1,
            transform:'translateX(0px)'
          },
          '25%':{
            transform:'translateX(24px)'
          },
          '50%':{
            transform:'translateX(0px)'
          },
          '75%':{
            transform:'translateX(24px)',
          },
          '100%':{
            transform:'translateX(0px)',
          }
        },
      },
      animation:{
        "hand":"hand 5s"
      }
    },
  },
  plugins: [],
}