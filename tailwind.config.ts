import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#171717",
        background: "#fdf7ed",
        primary: "#c94940",
        secondary: "#1f3d5c",
        accent: "#492822",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        general: ["GeneralSans-Variable", "sans-serif"],
        cursive: ["var(--font-pinyon-script)"],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
export default config;
