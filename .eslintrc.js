module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json"
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/prefer-string-starts-ends-with": "error"
  }
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'plugin:@typescript-eslint/recommended',
  // ],
};
