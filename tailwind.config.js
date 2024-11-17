/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors:{
      primary:"#083F9B",
      secondry:"#7F56D9",
      light:"#FFFFFF",
      notification:"#2AAA94",
      
      },
      backgroundImage: {
        'gradiant':'linear-gradient(to right, #083F9B, #7F56D9)',
        'custom-gradient': 'linear-gradient(to right, #04016C, #4A16BD)', // Example gradient
        'custom-blue': 'linear-gradient(to right, #4facfe, #00f2fe)',    // Another gradient
      },
    },
  },
  plugins: [],
}

