module.exports = {
  purge: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === 'production',
    //any file that may contain the reference of CSS styles by class name.
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'static/svg/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        body: ['Sudo'],
        'header': ['"Gloria Hallelujah"', 'cursive'],
        'poiret': ['"Poiret One"', 'cursive'],
        'elite': ['"Special Elite"', 'cursive'],
        'amatic': ['"Amatic SC"', 'cursive'],
        'cutive': ['"Cutive Mono"', 'monospace'],
        'fred': ['"Fredericka the Great"','cursive'],
        'beenie': ['"Reenie Beanie"', 'cursive'],
        'rochester': ['Rochester','cursive'],
        'major': ['"Major Mono Display"', 'monospace'],
        'sunshine': ['"Sunshiney"', 'cursive'],
        'butterfly': ['"Butterfly Kids"', 'cursive'],
        'newday': ['"Dawning of a New Day"', 'cursive']
      }
      },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/aspect-ratio'),
    require('postcss-import')
  ]
}
