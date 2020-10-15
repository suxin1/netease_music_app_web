module.exports = {
    "parser": 'babel-eslint',
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        // "plugin:react/recommended",
        "eslint-config-airbnb",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-unused-vars": 0, // TODO delete this rule when posible
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/prefer-default-export": 0,
        "import/no-named-as-default": 0,
        "no-param-reassign": 0,
        "func-names": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "no-use-before-define": 0,
        "no-restricted-syntax": 0,
        "react/jsx-props-no-spreading": ['off'],
        "react/self-closing-comp": ['error', {
            "component": true,
            "html": false,
        }],
        "react/jsx-closing-tag-location": 0,
        "prefer-promise-reject-errors": 0,
        "react/jsx-one-expression-per-line": 0,
        "global-require": 0,
        "no-plusplus": 0,
        "no-shadow": 0,
        "react/no-unescaped-entities": 0,
        "react/jsx-wrap-multilines": 0,
        "class-methods-use-this": 0,
    }
};