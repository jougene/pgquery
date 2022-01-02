module.exports = {
  extends: 'standard',
  env: {
    commonjs: true,
    node: true,
    mocha: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  },
  rules: {
    'curly': ['error', 'all'],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'prefer-const': 'error',
    'max-len': ['error', 160],
    'quote-props': ['error', 'consistent'],
    'dot-notation': ['error', { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }]
  }
}
