import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-rose": "var(--bg-rose)",
        ink: "var(--ink)",
        card: "var(--card)",
        muted: "var(--muted)",
        muted2: "var(--muted2)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        peach: "var(--peach)",
        salmon: "var(--salmon)",
        rose: "var(--rose)",
        sage: "var(--sage)",
        "chip-ink": "var(--chip-ink)",
        stripe1: "var(--stripe1)",
        stripe2: "var(--stripe2)",
        dash: "var(--dash)",
        "input-bg": "var(--input-bg)",
        "nav-pill": "var(--nav-pill)",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-nunito)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        serif: ["var(--font-young-serif)", "serif"],
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite alternate",
        pawWiggle: "pawWiggle 2.4s ease-in-out infinite",
      },
      keyframes: {
        floaty: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-18px)" },
        },
        pawWiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
