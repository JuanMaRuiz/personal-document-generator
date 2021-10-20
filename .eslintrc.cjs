module.exports = {
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8
    },
    "plugins": ["jest"],
    "env": {
        "node": true,
        "es6": true
    },
    "overrides":[
        {
            "settings": {
                "jest": {
                    "version": require('jest/package.json').version,
                }
            },
            "files": ["*.test.js"],
            "env": {
                "jest/globals": true
            },
            "rules": {
                "jest/no-disabled-tests": "warn",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-expect": "error"
            }
        }
    ] 
};