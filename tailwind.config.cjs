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
            },
            colors: {
                'viralget-red': '#F37C38',
                'viralget-grey': '#3E4555',
                'viralget-gray-200': '#F5F5F5',
                'viralget-gray-400': '#748094'
            },
            fontSize: {
                'h1': ['24px', { lineHeight: '28' }, { fontFamily: 'Lexend' }],
                base: ['14px', { lineHeight: '1', letterSpacing: '-0.01em' }],
                't-normal': [ '14px', { lineHeight : '18px'}],
                't-xs': [ '18px', { lineHeight : '22px'}],

            },
            spacing: {
                'space-16': '16px',
                'space-17': '17px',
                'space-20' : '20px',
                'space-60' : '60px',
                'space-131' : '131px'
            }
        }
    },
    plugins: [
        require("daisyui"),
        // require('@tailwindcss/forms')

    ],
}