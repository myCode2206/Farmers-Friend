/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/Sidebar/*.{js,ts,jsx,tsx}",
    "./src/Components/ChatApp/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extend: {
      display: ["focus-group"]
    }
  }
}