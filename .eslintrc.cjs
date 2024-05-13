const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = "eslint-plugin-deel/rules";

module.exports = (() => {
  const checkDeprecations =
    process.env.CHECK_DEPRECATIONS === "1" && process.env.CI !== "true";

  return {
    root: true,
    plugins: [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "jest-dom",
      "testing-library",
      "vitest",
      "deprecation",
      "lodash",
      "rulesdir",
    ],
    extends: [
      "eslint:recommended",
      // Enabling this will give us A LOT of no-explicit-any. We should make a push to fix
      // and enable this rule.
      // 'plugin:@typescript-eslint/recommended',
      "plugin:react/recommended",
      "plugin:vitest-globals/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    overrides: [
      {
        files: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(spec|test).[jt]s?(x)",
        ],
        extends: [
          "plugin:jest-dom/recommended",
          "plugin:testing-library/react",
        ],
        rules: {
          "jest-dom/prefer-checked": "error",
          "jest-dom/prefer-enabled-disabled": "error",
          "jest-dom/prefer-required": "error",
          "jest-dom/prefer-to-have-attribute": "error",
          "testing-library/await-async-query": "error",
          "testing-library/no-await-sync-query": "error",
          "testing-library/no-debugging-utils": "warn",
          "testing-library/no-dom-import": "off",
        },
      },
      {
        files: "**/*.ts?(x)",
        rules: {
          "no-undef": "off",
        },
      },
    ],
    rules: {
      quotes: 0,
      strict: 0,
      eqeqeq: 1,
      "no-unreachable": 1,
      "no-restricted-imports": [
        "warn",
        {
          patterns: [
            {
              group: ["@mui/*", "react-bootstrap"],
            },
            {
              group: ["moment", "moment-timezone"],
              message: "Moment is deprecated, use date-fns instead",
            },
          ],
        },
      ],
      "deprecation/deprecation": checkDeprecations ? "error" : "off",
      "react/jsx-no-undef": 1,
      "no-constant-condition": 1,
      "no-debugger": 1,
      "no-unused-vars": "off",
      "no-empty": [
        1,
        {
          allowEmptyCatch: true,
        },
      ],
      "react/prop-types": 0,
      "react/display-name": 0,
      "react/jsx-no-bind": 0,
      "react/no-render-return-value": 0,
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": "off",
      "react/no-danger": "error",
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false },
      ],
      "no-restricted-syntax": [
        "warn",
        {
          message:
            "dangerouslySetInnerHTML can't be used, use safelySetInnerHTML",
          selector:
            "ObjectExpression > Property > Identifier[name='dangerouslySetInnerHTML'], ObjectExpression > Property > Literal[value='dangerouslySetInnerHTML'], VariableDeclarator > Identifier[name='dangerouslySetInnerHTML']",
        },
      ],
      "react/jsx-no-leaked-render": 1,
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "lodash/import-scope": [2],
      "rulesdir/scene-imports": 1,
    },
    ignorePatterns: [
      ".storybook/public/mockServiceWorker.js",
      "!.storybook/preview.jsx",
    ],
    parserOptions: {
      project: checkDeprecations ? "./tsconfig.json" : undefined,
      tsconfigRootDir: __dirname,
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: { process: true, _: true, log: true, JSX: "readonly" },
    env: {
      es6: true,
      amd: true,
      commonjs: true,
      browser: true,
      jest: true,
      "vitest-globals/env": true,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/ignore:": ["node_modules"],
      "import/resolver": {
        typescript: {},
      },
    },
  };
})();
export const extends = ["plugin:storybook/recommended"];
