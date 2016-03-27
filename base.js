
var config = {
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  rules: {},
};

var bestPractices = require('./rules/best-practices');
var errors = require('./rules/errors');
var legacy = require('./rules/legacy');
var node = require('./rules/node');
var style = require('./rules/style');
var variables = require('./rules/variables');
var es6 = require('./rules/es6');
var strict = require('./rules/strict');
var importPlugin = require('./rules/import');

Object.assign(config.rules,
  bestPractices.rules,
  errors.rules,
  legacy.rules,
  node.rules,
  style.rules,
  variables.rules,
  es6.rules,
  strict.rules,
  importPlugin.rules
);

config.env = {
  "es6": true,
};

config.settings = {
  "import/resolver": "webpack",
  "import/ignore": [
    "node_modules",
    "\\.(styl|css)$",
    "\\.(json|txt|html)$",
    "\\.(png|jpg|jpeg)$",
  ],
};

config.plugins = [
  'sorting',
  'react',
  'import',
];

config.ecmaFeatures = {
  'arrowFunctions': true,
  'blockBindings': true,
  'classes': true,
  'defaultParams': true,
  'destructuring': true,
  'forOf': true,
  'generators': false,
  'modules': true,
  'objectLiteralComputedProperties': true,
  'objectLiteralDuplicateProperties': false,
  'objectLiteralShorthandMethods': true,
  'objectLiteralShorthandProperties': true,
  'restParams': true,
  'spread': true,
  'superInFunctions': true,
  'templateStrings': true,
  'jsx': true
};

module.exports = config;
