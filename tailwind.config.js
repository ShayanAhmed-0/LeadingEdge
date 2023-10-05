/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs : ['8px', ' 10px'],
      xs : ['10px', '12px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      h_1:['24px','32px'],
      lg: ['15px', '32px'],
      x: ['26px', '42px'],
      xl: ['34px', '46px'],
      ml:['38px', '66px'],
      head:['24px', '46px'],
      '4xl': '2.441rem',
      xxl: ['62px', '85px'],
    },
    screens: {
      'small_mob1':'220px', 
      'big_mob1':'299px', 
      'mobile' : '305px',
      'r1':"504px",
      'ipad' : '300px',
      'tab' : '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      backgroundImage: {
        "coverpg" : "public/Images/LEcover.jpg",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-bg-1": "#988276",
        "custom-bg-2": "#8a645f",
        "custom-bg-3": "#f0f0f0"
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        'jump': 'jump 0.5s linear',
      },
      keyframes: {
        jump: {
          '40%': { 
            'transform': 'translateY(-4px)',
            'text-shadow': '0 3px 1px rgba(0, 0, 0, .2)'
          },
          '100%': {
            'transform': 'translateY(0px)'
          }
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
