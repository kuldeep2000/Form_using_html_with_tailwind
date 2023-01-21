/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
   theme: {
     extend: {
       primary : '#243c5a', 
       secondary : {
         100: '#243c5a',
       }
     },
   },
   plugins: [],
}
