const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Trebuchet MS', 'Helvetica', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['Monaco', 'mono', 'Courier New'],
            simple: ['Inter', 'system-ui', 'sans-serif'],
            playful: ['Poppins', 'system-ui', 'sans-serif'],
            elegant: ['Tenor Sans', 'Georgia', 'serif'],
            brutalist: ['Roboto Mono', 'Menlo', 'monospace'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
}
