module.exports = {
  purge: [
    "./docs/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        "special-elite": ['FiraGo', 'cursive'],
        "kalam": ['Kalam', 'cursive']
      },
      boxShadow: {
        'image': '0px 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'card': '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        'bottom': '0px 8px 6px -6px rgba(0, 0, 0, 0.14)',
      },
      letterSpacing: {
        title: '0.3rem',
      },
      minHeight: {
        '20': '20rem'
      },
      maxHeight: {
        '70vh': '70vh',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('./theme.config.js'),
  ]
};
