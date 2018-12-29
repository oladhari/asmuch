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
    // will want to fix this in the future
    "react/no-string-refs": "warn",
    // will want to fix this in the future
    "no-unused-vars": "warn",
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        json: "never",
        css: "always",
        jpg: "always"
      }
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
