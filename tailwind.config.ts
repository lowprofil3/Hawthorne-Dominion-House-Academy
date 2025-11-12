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
        "ink-deep": "#0a0807",
        "accent-crimson": "var(--gilded)",
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
