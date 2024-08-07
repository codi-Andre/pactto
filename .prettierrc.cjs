/**
 * @type {import("prettier").Config}
 */
module.exports = {
  arrowParens: "always",
  jsxSingleQuote: false,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  tailwindPreserveWhitespace: true,
  plugins: ["prettier-plugin-tailwindcss"],
}
