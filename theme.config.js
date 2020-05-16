const { ThemeBuilder, Theme } = require('tailwindcss-theming');
const defaultTheme = require("tailwindcss/defaultTheme");

const lightTheme = new Theme()
    .name('light')
    .assignable()
    .colors({
          "background": "#ECE2D0",
          "text": "#1E1A1D",
          "link": "#000000",
          "link-hover": "#2C5282",
          "card": "#ffffff",
          "btn": "#c0c0c0",
          "btn-hover": "#a0a0a0",
          "btn-text": "#000000"
    });
/* 
const darkTheme = new Theme()
    .name('dark')
    .dark()
    .default()
    .assignable()
    .colors({
        "background": "#303030",
        "text": "#dbdbdb",
        "link": "#dbdbdb",
        "link-hover": "#999999",
        "card": "#424242",
        "btn": "#2b6cb0",
        "btn-hover": "#2c5282",
        "btn-text": "#dbdbdb"
    }); */

module.exports = new ThemeBuilder()
    .asPrefixedClass("theme") // .theme-<themeName>
    .default(lightTheme);
    // .theme(darkTheme);