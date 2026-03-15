/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-onyx": "#020617",
        "neural-purple": "#7c3aed",
        "electric-cyan": "#22d3ee"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SF Mono", "ui-monospace", "Menlo", "monospace"]
      },
      boxShadow: {
        "neon-blue": "0 0 25px rgba(56, 189, 248, 0.7)",
        "neon-purple": "0 0 25px rgba(129, 140, 248, 0.7)"
      },
      keyframes: {
        "glitch-1": {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(-2px,2px)" },
          "40%": { transform: "translate(-2px,-2px)" },
          "60%": { transform: "translate(2px,2px)" },
          "80%": { transform: "translate(2px,-2px)" }
        },
        "glitch-2": {
          "0%, 100%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(2px,-2px)" },
          "40%": { transform: "translate(2px,2px)" },
          "60%": { transform: "translate(-2px,-2px)" },
          "80%": { transform: "translate(-2px,2px)" }
        },
        scanline: {
          "0%": { opacity: "0.2", transform: "translateY(-100%)" },
          "100%": { opacity: "0.2", transform: "translateY(100%)" }
        },
        "particle-drift": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(10px,-15px,0) scale(1.1)" },
          "100%": { transform: "translate3d(-10px,10px,0) scale(1)" }
        }
      },
      animation: {
        "glitch-1": "glitch-1 2s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
        scanline: "scanline 2s linear infinite",
        "particle-drift": "particle-drift 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

