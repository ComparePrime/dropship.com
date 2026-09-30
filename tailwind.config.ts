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
      keyframes: {
        "cart-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "cart-slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "promo-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "stock-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        "cart-fade-in": "cart-fade-in 200ms ease-out",
        "cart-slide-in": "cart-slide-in 300ms cubic-bezier(0.22, 1, 0.36, 1)",
        "promo-pulse": "promo-pulse 2.4s ease-in-out infinite",
        "stock-glow": "stock-glow 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
