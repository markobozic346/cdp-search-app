const pathGroups = ["lib", "app", "components", "styles"];

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["import", "unused-imports"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        pathGroups: pathGroups.map((path) => ({
          pattern: `${path}/**`,
          group: "external",
          position: "after",
        })),
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],

    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars-ts": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
