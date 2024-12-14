const { Linter } = require('eslint');

/** @type {Linter.FlatConfig[]} */
module.exports[
  {
    // Define el entorno y las opciones del parser
    languageOptions: {
      ecmaVersion: 2024,
    },
    // Define el entorno global
    env: {
      es6: true,
      node: true,
      mocha: true,
    },
    // Extiende las configuraciones recomendadas
    extends: ['eslint:recommended', 'prettier'],
    // Configura reglas personalizadas
    rules: {
      'no-console': 'warn',
    },
  }
];
