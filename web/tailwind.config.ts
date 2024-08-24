import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ['Amatic SC', 'sans-serif'],
    },
    extend: {
      colors: {
        red: '#ff4c4c',
        green: '#a8d8b9',
        cream: '#fff7e5',
        pink: '#ffc4d4',
        blue: '#a1e0e6',
        darkGreen: '#89d96e',
        orange: '#ff914c',
        accent: {
          DEFAULT: 'ffc4d4',
          hover: "fff2f2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shape": "url('/template/shape-1.svg')",
        "shape-light": "url('/template/shape-light.svg')",

      },
    },
  },
  plugins: [],
};
export default config;
