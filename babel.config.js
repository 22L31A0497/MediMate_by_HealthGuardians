module.exports = {
    presets: [
      '@babel/preset-env',   // Allows Babel to transpile modern JavaScript to ES5
      '@babel/preset-react', // Allows Babel to handle JSX syntax
    ],
    plugins: [
      '@babel/plugin-syntax-flow', // Enables Flow syntax support
    ],
  };
  