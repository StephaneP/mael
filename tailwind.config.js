module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        "70/100": "70%",
        "91/100": "91%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
