/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        colors: {
            // 'viralget-gradient': 
            'viralget-red': '#F37C38',
            'viralget-grey': '#3E4555'
        },
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [
        // require("daisyui"),
        // require('@tailwindcss/forms')
    ],
}