import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- این خط بسیار مهم است
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        // ... تنظیمات قبلی شما
        fontFamily: {
            shabnam: ['var(--font-shabnam)'], // اگر فونت فارسی دارید
        }
    },
  },
  plugins: [],
};
export default config;
