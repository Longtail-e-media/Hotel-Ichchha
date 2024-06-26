/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        navy: "#011222",
        goldLight: "#E9C279",
        gold: "#cd9c31",
        // "bg-gold-light": "#efece2",
        // "bg-gold-dark": "#cfc6a8",
        "bg-gold-light": "#F9FAF6",
        "bg-gold-dark": "#EEE5C6",
        "pink-gold": "#F0E2DE",
      },
      fontFamily: {
        title: ['"Playfair Display"', "serif"],
        body: ["Inria Serif", "serif"],
      },
    },
  },
  plugins: [],
};
