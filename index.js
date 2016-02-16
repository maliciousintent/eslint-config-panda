module.exports = {
  extends: [
    'eslint-config-panda/rules/best-practices',
    'eslint-config-panda/rules/errors',
    'eslint-config-panda/rules/legacy',
    'eslint-config-panda/rules/node',
    'eslint-config-panda/rules/style',
    'eslint-config-panda/rules/variables',
    'eslint-config-panda/rules/es6',
    'eslint-config-panda/rules/strict',
    'eslint-config-panda/rules/react',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  rules: {},
};
