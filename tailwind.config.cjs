/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary-default)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary-default)",
          dark: "var(--secondary-dark)",
        },
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
