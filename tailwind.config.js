/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        indus:
          "url('https://uploads-ssl.webflow.com/622870a143b9561d25f9ea2f/6414ab61c07cb138bd6d6ba0_indus_gdc_2023_flags_capes.jpg')",
      },
    },
  },
  plugins: [],
};
