import { insert_edit_into_file } from "@microsoft/copilot-cli";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber': {
          primary: '#00f6ff',  // Bright cyan
          secondary: '#0891b2', // Darker cyan
          accent: '#818cf8',   // Indigo
          dark: '#0f172a',     // Very dark blue
          light: '#e2e8f0',    // Light gray
        },
        'neon': {
          blue: '#00f6ff',
          purple: '#818cf8',
          pink: '#ec4899',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 15px #00f6ff' },
          '100%': { 'box-shadow': '0 0 20px #00f6ff, 0 0 35px #00f6ff, 0 0 50px #00f6ff' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("/cyber-grid.png")',
      },
    },
  },
  plugins: [],
};