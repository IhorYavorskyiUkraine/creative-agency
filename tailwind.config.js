/** @type {import('tailwindcss').Config} */
export default {
   darkMode: ["class"],
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
            nunito: ["Nunito", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
            quicksand: ["Quicksand", "sans-serif"],
         },
         fontSize: {
            xs: "12px",
            sm: "14px",
            base: "16px",
            lg: "18px",
            xl: "20px",
            "2xl": "24px",
            "3xl": "55px",
         },
         lineHeight: {
            75: "75px",
            33: "33px",
            25: "25px",
            24: "24px",
            20: "20px",
            18: "18px",
            14: "14px",
         },
         fontWeight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
         },
         boxShadow: {
            whiteBtn: "0px 4px 8px 0px rgba(55, 125, 255, 0.5)",
            block: "4px 4px 30px 0px rgba(0, 0, 0, 0.1)",
            reviewItem: "0px 8px 24px 0px rgba(0, 0, 0, 0.05)",
         },
         colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            customWhite: "#e2e2e2",
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            chart: {
               1: "hsl(var(--chart-1))",
               2: "hsl(var(--chart-2))",
               3: "hsl(var(--chart-3))",
               4: "hsl(var(--chart-4))",
               5: "hsl(var(--chart-5))",
            },
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
