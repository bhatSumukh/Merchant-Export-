/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#15803D",
        secondary: "#F0FDF4",
        accent: "#F5E6CC",
        neutralLight: "#DCFCE7",
        textPrimary: "#1F2937",
        muted: "#6B7280",
      },

      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Poppins", "sans-serif"],
      },

      borderRadius: {
        section: "32px",
      },

      maxWidth: {
        content: "650px",
      },

      letterSpacing: {
        heading: "0.5px",
      },

      lineHeight: {
        hero: "1.1",
        section: "1.2",
        heading: "1.3",
        paragraph: "1.7",
      },
    },
  },

  plugins: [],
};