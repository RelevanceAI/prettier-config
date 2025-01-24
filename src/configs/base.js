/**
 * @type {import('./types').PrettierConfig}
 */
export const basePrettierConfig = {
  trailingComma: "es5",

  plugins: ["@ianvs/prettier-plugin-sort-imports"],

  importOrder: [
    "<TYPES>",
    "<THIRD_PARTY_MODULES>",
    "",

    /**
     * This section is for the frontend, and handles nuxt's magic `#*` imports.
     * e.g. `#app` or `#vue-router`
     */
    "<TYPES>^#",
    "^#",

    "",
    "<TYPES>^[.|..|~]",
    "^~/",
    "^[../]",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};
