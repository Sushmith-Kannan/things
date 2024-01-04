/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    screens: {
      '2xs': { min: '300px' },
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1259px' }, // Desktop wide.
      '2xl': { min: '1359px' },
      
  },
  colors:{
    'bubble':'#39423e'
  },
 


  animation: {
    fade: 'fadeIn .5s ease-in-out',
  },

  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
 
  animation: {
    "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
  
  },
  keyframes: {
    "text-reveal": {
      "0%": {
        transform: "translate(0, 100%)",
      },
      "100%": {
        transform: "translate(0, 0)",
      },
    },
  },
  fontFamily:{
    custom:['Crystal','sans-serif'],
    fem:['femen','sans-serif'],
    late:['Poppins', 'sans-serif']
  }

    },
    
    
  plugins: [
    
  ],
}

