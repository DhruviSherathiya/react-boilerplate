import { BACKGROUND_COLORS, BORDER_COLORS, TEXT_COLORS } from './src/utils/colorUtils';
import TYPOGRAPHY_UTILS from './src/utils/typographyUtils';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: BACKGROUND_COLORS,
    textColor: TEXT_COLORS,
    borderColor: BORDER_COLORS,
    fontSize: TYPOGRAPHY_UTILS,
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
    },
    borderRadius: {
      0: '0px',
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '12px',
    }  
  },
  plugins: [],
}

