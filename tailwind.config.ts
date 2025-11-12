import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        crimson: "var(--crimson)",
        crimsonDeep: "var(--crimson-deep)",
        gilded: "var(--gilded)",
        ivory: "var(--ivory)",
        parchmentDark: "var(--parchment-dark)",
        shadowGold: "var(--shadow-gold)",
        "ink-deep": "#0a0807",
        gold: "#c5b273",
        "accent-crimson": "#6a1717",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "EB Garamond", "ui-serif", "Georgia", "serif"],
        body: ["Lora", "Crimson Text", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
