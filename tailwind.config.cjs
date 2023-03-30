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
        extend: {
            fontFamily: {
                sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
                lexend: ['Lexend', 'sans-serif'],
                // satoshi: ['Satoshi', 'sans-serif'],
            },
            colors: {
                'viralget-red': '#F37C38',
                'viralget-grey': '#3E4555'
            },
            fontSize: {
                'h1': ['24px', { lineHeight: '28' }, { fontFamily: 'Lexend' }],
                base: ['14px', { lineHeight: '1', letterSpacing: '-0.01em' }],

            },
        }
    },
    plugins: [
        require("daisyui"),
        // require('@tailwindcss/forms')

    ],
}