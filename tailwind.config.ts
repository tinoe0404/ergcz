import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A7FCA',
          light: '#5BA4DC',
          dark: '#1A5FA0',
        },
        sky: '#E8F4FD',
        navy: '#0F2D4A',
        slate: '#4A6A85',
        gold: '#F5A623',
        white: '#FFFFFF',
        'off-white': '#F7FBFF',
      },
      fontFamily: {
        display: ['var(--font-dm-serif-display)', 'serif'],
        body: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
