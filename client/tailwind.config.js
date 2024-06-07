/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matcha: {
          950: '#1D232A',
          850: '#2A323C',
        },
      },
    },
  },
  plugins: [daisyui],
};
