/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom-pattern":"url('/src/assets/Lines.svg')",
        "custom-gradient":"linear-gradient(315deg,rgba(255,255,255,0.1)0%,rgba(255,255,255,1)100%)",
        "gradient-button":"linear-gradient(180deg,rgba(61, 66, 68, 0)0%,rgba(158, 170, 176,0.62)100%),linear-gradient(0deg,rgba(39, 55, 207,0)0%,rgba(189, 252, 254,0.2)100%)",
        "left-dashboard-gradient":"linear-gradient(90deg,rgba(38,112,233,0.3)0%,rgba(38,112,233,0)100% )",
        "blue-gradient":"radial-gradient(rgba(31,143,255,0.5),rgba(31,143,255,0))"
      },
      backgroundColor:{
        "custom-black":"#000000"
      },
      boxShadow: {
        'buttons-shadow': 'inset 0px 0.84px 2.51px rgba(199, 220, 255, 0.35), inset 0px 0px 16.72px 0px rgba(198, 204, 255, 0.2), 0px 0.84px 18.39px rgba(255, 255, 255, 0.1), 0px 3.34px 3.34px rgba(0, 0, 0, 0.05), 0px 8.36px 8.36px rgba(0, 0, 0, 0.1)',
        'dashboard-inset-shadow': 'inset 0px 31.35px 62.71px 0px rgba(255, 255, 255, 0.15),0px 3.14px 6.27px 0px rgba(0, 0, 0, 0.05), 0px 9.41px 18.81px 0px rgba(0, 0, 0, 0.05), 0px 18.81px 37.63px 0px rgba(0, 0, 0, 0.1)',
        'free-trail-shadow': 'inset 0px 6.69px 8.36px rgba(246, 249, 255, 0.2), 0px 3.34px 3.34px rgba(0, 0, 0, 0.05), 0px 8.36px 8.36px rgba(0, 0, 0, 0.1), 0px 8.36px 33.34px rgba(255, 255, 255, 0.15)',
        'dashboard-outset-left': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      
    },
  },
  plugins: [
  ],
}

