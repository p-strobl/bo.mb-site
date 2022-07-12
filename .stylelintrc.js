module.exports = {
  "extends": [
    "stylelint-config-styled-components"
  ],
  "plugins": [
    "stylelint-order"
  ],
  "customSyntax": "@stylelint/postcss-css-in-js",
  "rules": {
    "indentation": 2,
    "max-empty-lines": 1,
    "max-nesting-depth": 2,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "order/properties-alphabetical-order": true,
    "string-quotes": "double"
  }
}
