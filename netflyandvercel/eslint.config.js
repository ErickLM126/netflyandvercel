import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",

      "react/prop-types": "off",
      "no-unused-vars": ["warn"],
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
