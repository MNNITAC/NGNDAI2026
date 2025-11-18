/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}",], theme: {
        extend: {
            keyframes: {
                scrollHorizontal: {
                    '0%': {transform: 'translateX(0)'}, '100%': {transform: 'translateX(-100%)'},
                }, slide: {
                    from: {transform: "translateX(100%)"}, to: {transform: "translateX(-100%)"},
                },
            },

            animation: {
                'scroll-horizontal': 'scrollHorizontal 30s linear infinite',
                        slide: "slide 25s linear infinite",

            },
        }, fontFamily: {
            'playfair': ["Playfair Display", "serif"]
        }
    }, plugins: [require('daisyui')], daisyui: {
        themes: ["fantasy", "dark"]
    }
}