module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        'max-len': ['error', {
            'code': 120,
            'comments': 120,
            'tabWidth': 4,
            'ignoreUrls': true,
            'ignoreTrailingComments': false,
            'ignoreComments': false
        }],
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "arrow-body-style": 0
    }
};
