/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    colors : {
      'variation-500' : "#0f3460",
      "variation-400" : "#175093",
      'white' : '#ffffff',
      'neutral-50' : "#f9fafb",
      "neutral-200" : "#e5e7eb",
      "gray-50" : "#f9fafb",
      'red-500' : "#f43f5e",
      'gray-900' : "#020617",
      "gray-300" : "#d1d5db",
      "gray-600" : "#475569",
      "zinc-50" : "#fafafa",
      'yellow-300' : "#fde047",
      'yellow-400' : "#fcd34d",
      "rose-50" : "#ffe4e6",
      "rose-600" : "#be123c",
      "rose-500" : "#f43f5e",
      "slate-800" : "#1e293b",
      "green-50"  : "#d1fae5",
      "green-600" : "#16a34a",
      "cyan-50"   : "#ecfeff",
      "cyan-400" : "#22d3ee",
      "cyan-500" : "#06b6d4",
      "cyan-600" : "#0891b2",
      "slate-400" : "#94a3b8",
      "slate-600" : "#475569",
    },
   
    screens: {
      'xs': '480px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily:{
        roboto : "'Roboto',serif",
        ubuntu : "'ubuntu',serif",
        teko : "'Teko',serif",
      }
    },
  },
  plugins: [],
}