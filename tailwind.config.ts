import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        neon_navy: '#131936',
        pageant_blue: '#1F2C43',
        harbor_blue: '#00656E',
        cloud_dancer: '#F0EEE9',
        background_header: '#20242c',
        background_btn: '#4C98EE',
        background_span: '#1057A8',
        background_btn_burger: '#C44E68',
        background_btn_hover: '#4C98EE',
        background_section_2: '#E1E327',
        background_section_2_2: '#FFEEC4',
        background_section_3: '#F0EEE9',
        background_section_4: '#00656E',
        background_section_5: '#FFCE4E',
        background_section_6: '#e4722b',
        background_section_7: '#3D98D3',
        red1: '#FFEB99',
        text_header: '#FFFFFF',
        text_1: '#000000',
        text_2: '#FFFFFF',
        text_2_2: '#212121',
        text_3: '#20242c',
        texthover: '#727d91',
        bluesmock: '#57a3eb',
        telegram: '#0088cc',
        instagram: '#E4405F',
        tiktok: '#000000',
        facebook: '#1877F2',
      },
      backgroundImage: {
        photo: './public/popup.jpg',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/Group.png')",
      },
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        white: '0.2px 0.2px 0.5px white, 0 0 0.5em white, 0 0 0.2em white',
        black: '0.5px 0.5px 1px black, 0 0 1em black, 0 0 0.5em black',
        black2: '0.1px 0.1px 0.1px black, 0 0 0.1em black, 0 0 0.1em black',
        orange: '0.5px 0.5px 1px #e4722b, 0 0 1em black, 0 0 0.5em #e4722b',
      },
      keyframes: {
        'tilt-shaking': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        'tilt-shaking': 'tilt-shaking 0.3s 10',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
