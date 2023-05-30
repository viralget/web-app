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
                'primary': '#f37c38',
                'viralget-red': '#F37C38',
                'viralget-red-100': '#FEF2EB',
                'viralget-grey': '#3E4555',
                'viralget-gray-200': '#F5F5F5',
                'viralget-gray-400': '#748094',
                'viralget-gray-300': '#E8E9F1',
                'viralget-gray-500': '#A5ABB5',
                'viralget-green-200': '#28CA42',
                'viralget-gray-light': '#FFFFFFCC',
                'viralget-black': '#090218',
                'viralget-twitter-blue': '#01C5FF'
            },
            fontSize: {
                'h1': ['24px', { lineHeight: '28px' }, { fontFamily: 'font-lexend' }],
                'h1-x': ['24px', { lineHeight: '30px' }, { fontFamily: 'font-lexend' }],
                't-xxlg': ['64px', { lineHeight: '70px' }, { fontFamily: 'font-lexend' }],
                't-xlg': ['44px', { lineHeight: '48px' }, { fontFamily: 'font-lexend' }],
                't-lg': ['36px', { lineHeight: '40px' }, { fontFamily: 'font-lexend' }],
                't-lg-x': ['32px', { lineHeight: '36px' }, { fontFamily: 'font-lexend' }],
                base: ['14px', { lineHeight: '1', letterSpacing: '-0.01em' }],
                't-normal-x': ['12px', { lineHeight: '16px' }],
                't-normal': ['14px', { lineHeight: '18px' }],
                't-normal-lg': ['20px', { lineHeight: '28px' }],
                't-xsx-header': ['14px', { lineHeight: '20px' }],
                't-xs': ['18px', { lineHeight: '22px' }],
                't-xsx': ['16px', { lineHeight: '20px' }],
                't-large': ['54px', { lineHeight: '62px' }],
                'h1-n': ['24px', { lineHeight: '32px' }],
                't-x-t': ['22px', { lineHeight: '26px' }],
            },
            spacing: {
                'space-4': '4px',
                'space-6': '6px',
                'space-8': '8px',
                'space-10': '10px',
                'space-12': '12px',
                'space-14': '14px',
                'space-15': '15px',
                'space-16': '16px',
                'space-17': '17px',
                'space-20': '20px',
                'space-24': '24px',
                'space-26': '26px',
                'space-28': '28px',
                'space-30': '30px',
                'space-32': '32px',
                'space-34': '34px',
                'space-35': '35px',
                'space-36': '36px',
                'space-40': '40px',
                'space-46': '46px',
                'space-58': '58px',
                'space-60': '60px',
                'space-68': '68px',
                'space-70': '70px',
                'space-75': '75px',
                'space-80': '80px',
                'space-90': '90px',
                'space-120': '120px',
                'space-131': '131px',
                'space-140': '140px',
                'space-143': '143px',
                'space-150': '150px',
                'space-160': '160px',
                'space-176': '176px',
                'space-180': '180px',
                'space-190': '190px',
                'space-200': '200px',
                'space-245': '245px',
                'space-282': '282px',
                'space-290': '290px',
                'space-500': '500px',
                'space-502': '502px',
                'space-504': '504px',
                'space-510': '510px',
                'space-600': '600px'

            },
            boxShadow: {
                'header-card': '0 4px 16px 0px #CACADB29',
                'side-menu': '14px  0px 60px 0px #2C30400D',
                'header-card-2': '0px  4px 21px 0px #4D53680F',
            },

            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('/img/footer-texture.png')",
            }
        }
    }
}