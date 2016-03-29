# eslint-config-panda

[![npm version](https://badge.fury.io/js/eslint-config-panda.svg)](http://badge.fury.io/js/eslint-config-panda)

This package provides PlasticPanda's .eslintrc as an extensible shared config.

### eslint-config-panda

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

```
npm install --save-dev eslint-config-panda eslint-plugin-react eslint
```
### Need React?
Add `"extends": "panda"` to your .eslintrc for linting project with react

### No React?
Add `"extends": "panda/base"` to your .eslintrc for linting project with react
