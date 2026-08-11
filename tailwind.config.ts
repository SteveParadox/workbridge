import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#07162A",
          mid: "#123B67",
          soft: "#EAF0F8"
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E5D18A"
        },
        ink: "#172033",
        muted: "#667085",
        line: "#E5E7EB",
        paper: "#F7F9FC"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 22, 42, 0.08)",
        lift: "0 24px 70px rgba(7, 22, 42, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
