/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primaryColor: "#6096ba",
       secndaryColor:"#cad2c5"
      },
      fontFamily:{
        robote:" Roboto"
      }
    },
  },
  plugins: [],
}

