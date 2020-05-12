
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/member-ordering": [
      2,
      {
        "default": ["signature", "method", "constructor", "field"]
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-this-alias": "off",
    "camelcase": 0,
    "comma-dangle": 0,
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "func-names": 0,
    "import/extensions": 0,
    "import/no-cycle": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": [
      2,
      {
        "caseSensitive": true
      }
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/anchor-is-valid": 0,
    "key-spacing": [
      "error",
      {
        "align": {
          "afterColon": true,
          "beforeColon": true,
          "on": "colon"
        }
      }
    ],
    "linebreak-style": "error",
    "lines-between-class-members": 0,
    "max-len": [
      "error",
      {
        "code": 160
      }
    ],
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0
      }
    ],
    "no-param-reassign": 0,
    "no-throw-literal": 0,
    "no-trailing-spaces": "error",
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "object-curly-newline": [
      "error",
      {
        "multiline": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".tsx",
          ".jsx"
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": [
      "error",
      {
        "require": {
          "ArrowFunctionExpression": false,
          "ClassDeclaration": true,
          "FunctionDeclaration": true,
          "FunctionExpression": false,
          "MethodDefinition": false
        }
      }
    ],
    "semi": "error",
    "space-before-blocks": [
      "error",
      {
        "classes": "never",
        "functions": "always",
        "keywords": "always"
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "alias": {
        "extensions": [
          ".ts",
          ".js",
          ".tsx",
          ".jsx",
          ".json"
        ],
        "map": [
          [
            "@",
            "./src/"
          ]
        ]
      },
      "eslint-import-resolver-typescript": true,
      "node": true,
      "webpack": {
        "config": {
          "resolve": {
            "extensions": [
              ".ts",
              ".js",
              ".tsx",
              ".jsx"
            ]
          }
        }
      }
    }
  },
  "overrides": [
    {
      "files": [
        "*.{test,spec,story}.{js,ts,jsx,tsx}"
      ],
      "rules": {
        "require-jsdoc": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "import/no-extraneous-dependencies": 0
      }
    }
  ]
}
