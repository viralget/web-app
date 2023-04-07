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
                sans: ['Satoshi Regular', ...defaultTheme.fontFamily.sans],
                lexend: ['Lexend', 'sans-serif'],
            },
            colors: {
                'viralget-red': '#F37C38',
                'viralget-grey': '#3E4555',
                'viralget-gray-200': '#F5F5F5',
                'viralget-gray-400': '#748094',
                'viralget-gray-300': '#E8E9F1'
            },
            fontSize: {
                'h1': ['24px', { lineHeight: '28px' }, { fontFamily: 'font-lexend' }],
                't-lg': ['36px', { lineHeight: '40px' }, { fontFamily: 'font-lexend' }],
                't-lg-x': ['32px', { lineHeight: '36px' }, { fontFamily: 'font-lexend' }],
                base: ['14px', { lineHeight: '1', letterSpacing: '-0.01em' }],
                't-normal-x': [ '12px', { lineHeight : '16px'}],
                't-normal': [ '14px', { lineHeight : '18px'}],
                't-xsx-header': [ '14px', { lineHeight : '20px'}],
                't-xs': [ '18px', { lineHeight : '22px'}],
                't-xsx': [ '16px', { lineHeight : '20px'}],
                

            },
            spacing: {
                'space-8': '8px',
                'space-14': '14px',
                'space-16': '16px',
                'space-17': '17px',
                'space-20' : '20px',
                'space-24' : '24px',
                'space-32' : '32px',
                'space-34' : '34px',
                'space-35' : '35px',
                'space-40' : '40px',
                'space-60' : '60px',
                'space-75' : '75px',
                'space-80' : '80px',
                'space-131' : '131px',
                'space-150' : '150px',
                'space-190' : '190px',
                'space-282' : '282px',
                'space-500' : '500px',
                'space-510' : '510px',
                'space-600' : '600px'

            },
            boxShadow: {
                'header-card': '0 4px 16px 0px #CACADB29',
                'side-menu': '14px  0px 60px 0px #2C30400D',
            },
    }
    }
}