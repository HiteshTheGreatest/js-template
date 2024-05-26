import globals from "globals";
import pluginJs from "@eslint/js";
import eslint from 'eslint-config-prettier'

export default [
  {
    languageOptions: { globals: globals.node },
    files: ["src/**/*.js"],
  },
  pluginJs.configs.recommended,
  eslint
];