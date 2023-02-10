module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {
      colors: {
        'default-dark' : '#CAD8E7',
        'default-main' : '#DCE5EF',
        'default-light' : '#EDF2F7',
        'default-alt' : '#E6F2FF',
        'gray-dark' : '#1A1A1A',
        'gray-main' : '#262626',
        'gray-light' : '#333333',
        'gray-alt' : '#F2F2F2',
        'primary-dark' : '#0056B3',
        'primary-main' : '#0063CC',
        'primary-light' : '#006FE6',
        'primary-alt' : '#E6F2FF',
        'success-dark' : '#1D9537',
        'success-main' : '#22AA3F',
        'success-light' : '#26C047',
        'success-alt' : '#EAFBED',
        'warning-dark' : '#B37400',
        'warning-main' : '#CC8500',
        'warning-light' : '#E69500',
        'warning-alt' : '#FFF6E6',
        'danger-dark' : '#B30900',
        'danger-main' : '#CC0A00',
        'danger-light' : '#E60B00',
        'danger-alt' : '#FFE7E6',
        'info-dark' : '#782390',
        'info-main' : '#8928A4',
        'info-light' : '#9A2DB9',
        'info-alt' : '#F7EAFA',
      },
      fontFamily: {
        'sans': ['Inter'],
        'poppins': ['Poppins'],
        'heading': ['Inter'],
      },
      fontSize: {
        's': '0.875rem',
        'm': '1rem',
        'l': '1.125rem',
        'xl': '1.375rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
    

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
