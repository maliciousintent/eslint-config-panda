
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
var react = require('./rules/react');

Object.assign(config,
  bestPractices,
  errors,
  legacy,
  node,
  style,
  variables,
  es6,
  strict,
  react
);

module.exports = config;
