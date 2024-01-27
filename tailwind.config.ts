import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '0 5px 80px 10px ',
      },
      colors: {
        "red-nav": "rgba(228, 2, 2, 0.94)",
        white: "#fff",
        "soft-grey": "#e8e8e8",
        gray: "rgba(255, 255, 255, 0)",
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      spacing: {},
      fontFamily: {
        saira: "'Saira Condensed'",
        inter: "Inter",
      },
    },
    fontSize: {
      base: "16px",
      huge: "50px",
      extraLarge: "96px",
      medium: "32px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
export default config;
