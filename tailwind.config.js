module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Raleway", "Open Sans", "sans-serif"],
            serif: ["'Roboto Slab'", "Open Sans", "serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
