// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // scrolls halfway up
        },
      },
      animation: {
        scrollUp: 'scrollUp 20s linear infinite', // adjust duration here
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rounded-squircle': {
          'border-radius': '30% / 20%',
        },
      });
    }),
  ],
}
