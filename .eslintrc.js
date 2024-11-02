module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser", // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Enables strict type-checking rules
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended", // Integrates Prettier as an ESLint rule
  ],
  rules: {
    /* General Code Quality Rules */
    "no-console": "warn", // Warn on console statements to avoid cluttering production logs
    "no-var": "error", // Disallow `var` in favor of `let` and `const`
    "prefer-const": "error", // Enforce `const` where possible
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Allow unused variables starting with `_`
    eqeqeq: "error", // Enforce strict equality

    /* TypeScript-Specific Rules */
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-explicit-any": "error", // Disallow `any` type
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Prefer `interface` over `type`
    "@typescript-eslint/no-non-null-assertion": "warn", // Warn on non-null assertions
    "@typescript-eslint/explicit-module-boundary-types": "error", // Enforce explicit return types on module boundaries
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true }, // Only allow numbers and strings in template expressions
    ],

    /* Import Rules */
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": ["warn", { count: 1 }], // Ensure newline after last import
    "import/no-default-export": "warn", // Encourage named exports
    "import/no-duplicates": "error", // Prevent duplicate imports

    /* Prettier Integration */
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        semi: true,
        tabWidth: 2,
        printWidth: 80,
      },
    ],
  },
  overrides: [
    {
      files: ["*.spec.ts", "*.test.ts"],
      rules: {
        "no-unused-expressions": "off", // Allow unused expressions in tests (e.g., Chai assertions)
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {}, // Resolve imports using TypeScript paths
    },
  },
};
