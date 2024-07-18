import { url } from "inspector";
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
        background_header: '#20242c',
        background_btn: '#FFA500',
        background_btn_hover: '#FF8C00',
        background_section_2: '#FF7175',
        background_section_3: '#FFDF55',
        background_section_4: '#00B0AB',
        background_section_5: '#FFFFFF',
        background_section_6: '#8A2BE2',
        background_section_7: '#4B0082',
        background_section_8: '#EC0B88',
        background_section_9: '#20242c',
        background_section_10: '#1E90FF',
        red1: '#FFEB99',
        text_header: '#FFFFFF',
        text_1: '#000000',
        text_2: '#FFFFFF',
        text_3: '#20242c',
        texthover: '#727d91',
        bluesmock: '#57a3eb',
        yellow:'#FFD700'
        
      },
      backgroundImage: {
        "photo": "./public/popup.jpg",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/Group.png')"
      },
    },
  },
  plugins: [],
};
export default config;
