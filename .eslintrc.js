module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    "airbnb",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  'installedESLint': true,
  'parser': 'babel-eslint',
  'plugins': [
    'import',
    'react',
  ],
  'globals': {
    'html2canvas': false,
    "window": true,
    "config": true,
  },
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', {'allow': ['warn', 'error']}],
    'no-var': 'error',
    'no-unused-vars': ['warn', {'args': 'none'}],
    'semi': ['error', 'never'],
    'unicode-bom': 'error',
    'import/no-unresolved': [2, { ignore: ['views/.*'] }],
    "comma-spacing": ["error", { "before": false, "after": true }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'eqeqeq': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'camelcase': 'off',
    'object-shorthand': 'off',
    'arrow-body-style': 'off',
    'radix': 'warn',
    'no-return-assign': 'off',
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/img-has-alt': 'off',
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.es', '.coffee', '.cjsx'],
        'paths': [__dirname],
      },
    },
    'import/core-modules': [
      'electron',
      'react',
      'react-dom',
      'react-redux',
      'redux-observers',
      'reselect',
      'react-bootstrap',
      'react-fontawesome',
      'path-extra',
      'fs-extra',
      'lodash',
      'cson',
      'fast-memoize',
      'classnames',
      'i18n-2',
      'semver'
    ],
  },
}
