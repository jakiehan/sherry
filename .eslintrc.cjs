module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.json']
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort"
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        'react-hooks/exhaustive-deps': 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
