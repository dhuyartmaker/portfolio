module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "color-text": "var(--color-text)",
                "color-footer": "var(--color-footer)",
                "gradient-text": "var(--gradient-text)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}