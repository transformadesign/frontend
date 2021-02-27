module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'accent-1': '#FAFAFA',
                'accent-2': '#EAEAEA',
                'accent-7': '#333',
                success: '#0070f3',
                cyan: '#79FFE1',
                black: 'rgba(84, 84, 84, 1)',
                'slider-button': '#262626',
                'slider-title': '#262626'
            },
            spacing: {
                28: '7rem'
            },
            letterSpacing: {
                tighter: '-.04em',
                wider: '0.1rem',
                widest: '0.25em'
            },
            lineHeight: {
                tight: 1.2
            },
            height: {
                xv: '80vh'
            },
            fontSize: {
                xxs: '0.5rem',
                '4-5xl': '2.05rem'
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
            },
            maxWidth: {
                'xxl': '96rem',
                'xxs': '9rem',
                '66p': '66%'
            },
            screens: {
                'xxs': '320px'
            }
        }
    }
};
