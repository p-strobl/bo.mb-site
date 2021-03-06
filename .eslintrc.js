module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    camelcase: [
      "warn",
      {
        properties: "always",
      },
    ],
    "eol-last": "error",
    "func-names": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": [
      "off",
      {
        caseSensitive: false,
      },
    ],
    "import/prefer-default-export": "off",
    "max-len": [
      "off",
      {
        code: 100,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-console": "warn",
    "no-multiple-empty-lines": "error",
    "no-extraneous-dependencies": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "no-prototype-builtins": "off",
    "no-return-assign": "off",
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id"],
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        vars: "all",
      },
    ],
    "prefer-const": "error",
    "prefer-promise-reject-errors": "off",
    quotes: [
      "warn",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: "off",
    "react-hooks/exhaustive-deps": [
      "off",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "react/jsx-boolean-value": "warn",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/jsx-no-bind": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off",
    semi: ["warn", "always"],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
  },
  plugins: ["react", "@typescript-eslint"],
};
