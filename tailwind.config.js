const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
