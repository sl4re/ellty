import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  ["error", { "typeof": true }],
  pluginJs.configs.recommended
];
