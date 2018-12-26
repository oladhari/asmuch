module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "16.5.2"
    }
  },
  rules: {
    "no-console": "warn",
    "import/extensions": [
      2,
      { js: "never", jsx: "never", jpg: "ignore", css: "ignore" }
    ]
  },
  plugins: ["react", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ]
};
