export default {
  plugins: [
    (await import('@tailwindcss/postcss7-compat')).default,
    (await import('autoprefixer')).default
  ],
};
