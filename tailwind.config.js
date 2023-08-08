/* @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./*.html" , "./main.js" , "./js/module/*/*.js" ,"./js/module/*.js"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        yekan:["iranYekan"],
        bakh:["bakhM"],
        bakhBold:["bakhB"],
        bakhHeavy:["bakhH"]
      }
    },
    screens:{
      "sm":"576px",
      "md":"768px",
      "lg":"992px",
      "xl":"1200px",
      "2xl":"1400px"
    }
  },
  plugins: [],
}

