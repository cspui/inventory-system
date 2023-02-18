module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  pluginSearchDirs: false,
};
