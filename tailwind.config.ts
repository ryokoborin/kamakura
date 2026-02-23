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
        // 和モダン カラーパレット
        main: {
          blue: "#264653",
          matcha: "#6B7F5E",
        },
        accent: {
          vermillion: "#C1440E",
          gold: "#C9A94E",
        },
        base: {
          paper: "#F5F0E8",
          ink: "#2C2C2C",
        },
        crowd: {
          empty: "#4CAF50",
          moderate: "#FFC107",
          busy: "#FF9800",
          veryBusy: "#F44336",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "Noto Serif JP", "serif"],
        sans: ["var(--font-noto-sans)", "Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
