import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5EF",
        sand: "#EEE7DC",
        ink: "#292722",
        charcoal: "#3A372F",
        stone: "#6B655A",
        // Vert sauge : couleur de marque principale (boutons, navigation, icones).
        sage: "#6F7663",
        sageDeep: "#4B5140",
        // Terracotta : accent secondaire uniquement (badges, details, petits accents).
        terracotta: "#A56B52",
        terracottaText: "#7A4A37",
        blush: "#D8C7B5",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(28, 27, 25, 0.06)",
        lift: "0 20px 60px rgba(28, 27, 25, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
