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
      }
    }
  },
  plugins: [],
}
