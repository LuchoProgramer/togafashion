import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#eca413",
                "background-light": "#f8f7f6",
                "background-dark": "#0f1115",
                "card-dark": "#1a1d23",
                "accent-gold": "#d4af37",
            },
            fontFamily: {
                "display": ["var(--font-newsreader)", "serif"],
                "body": ["var(--font-noto-sans)", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            keyframes: {
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in-up": "fade-in-up 0.8s ease-out forwards",
            },
        },
    },
    plugins: [],
};
export default config;
