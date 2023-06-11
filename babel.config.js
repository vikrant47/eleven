const plugins = ['@babel/plugin-transform-modules-commonjs'];
// Remove the console from the production environment
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}
module.exports = {
  plugins: plugins,
  presets: [
    '@vue/app',
  ]
};
