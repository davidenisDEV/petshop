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
        background: "#F8FAFC", // Branco gelo/suave (Higiene)
        primary: {
          DEFAULT: "#00B4D8", // Azul Ciano (Saúde/Confiança)
          light: "#90E0EF",
          dark: "#0077B6",
        },
        accent: {
          DEFAULT: "#FFD166", // Amarelo (Alegria/Pets)
          hover: "#FFC233",
        },
        text: {
          main: "#334155", // Cinza escuro para leitura fácil
          muted: "#64748B",
        }
      },
      fontFamily: {
        display: ['var(--font-lily)'], 
        sans: ['var(--font-sofia)'],   
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;