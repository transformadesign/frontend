module.exports = {
    purge: [
        './src/components/**/*.tsx',
        './src/pages/**/*.tsx'
    ],
    variants: {
        extend: {
            padding: ['last'],
            margin: ['last']
        }
    },
    theme: {
        extend: {
            colors: {
                'slider-button': '#262626',
                'slider-title': '#262626',
            },
            spacing: {
                28: '7rem',
                40: '12rem'
            },
            letterSpacing: {
                tighter: '-.04em',
                wider: '0.1rem',
                widest: '0.25em'
            },
            lineHeight: {
                tight: 1.2,
                3: 3
            },
            fontSize: {
                xxs: '0.5rem',
                '4-5xl': '2.05rem'
            },
            maxWidth: {
                '66p': '66%'
            },
            flex: {
                slide: '0 0 100%',
                quad: '0 0 50%',
                trio: '1 1 33%'
            },
            backgroundColor: {
                slide: 'rgba(0, 0, 0, .3)',
                'white-trans': 'rgba(255, 255, 255, .8)'
            },
            height: {
                large: '85vh'
            },
            screens: {
                low: { raw : '(max-height: 600px)' }
            },
            inset: {
                header: '100px'
            },
            minHeight: {
                slide: '600px'
            }
        }
    }
};
