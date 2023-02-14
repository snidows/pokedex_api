/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  env: {
    es2022: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint","prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "no-prototype-builtins": "off",
    "no-useless-constructor": "off",
    "space-before-function-paren": 0,
    "no-use-before-define": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "max-len": ["warn", { code: 200 }],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["snake_case"]
      },
    ],
  }
}
