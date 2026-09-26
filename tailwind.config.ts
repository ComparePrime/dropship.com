import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EF",
        sand: "#EAE3D7",
        ink: "#1C1B19",
        charcoal: "#2C2B28",
        stone: "#8A8477",
        accent: "#B98A5E",
        accentDark: "#96703F",
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
