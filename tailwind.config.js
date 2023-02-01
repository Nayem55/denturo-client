/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#19D3AE",

          secondary: "#3A4256",

          accent: "#D4D9E3",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
