module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "extends": ["airbnb", "prettier"],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "max-len": ["error", {"code": 120}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"]
  }
}