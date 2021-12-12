module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        primary: '#231929',
        secondary: '#EBEBEF',
        accent: '#953250',
      },
      backgroundImage: {
        'hero': "url('/assets/branding/hero.png')",
        'feature-1': "url('/assets/branding/feature-1.png')",
        'feature-2': "url('/assets/branding/feature-2.png')",
        'feature-3': "url('/assets/branding/feature-3.png')",
        'service-1': "url('/assets/branding/service-1.png')",
        'service-2': "url('/assets/branding/service-2.png')",
        'service-3': "url('/assets/branding/service-3.png')",
      },
      animation: {
        'point': 'point 2s infinite',
      },
      keyframes: {
        point: {
          '0%, 100%': {
            transform: 'translateX(-10%)', 
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '50%': {
            'transform': 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      screens: {
        'xs': '360px',
        // => @media (min-width: 360px) { ... }
      }
    }
  },
  plugins: [],
}
