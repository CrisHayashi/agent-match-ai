import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0B1120",
        panel: "#111827",
        electric: "#3B82F6",
        violet: "#8B5CF6",
        cyan: "#22D3EE"
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
