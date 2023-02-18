const path = require('path');

// Update LOCALE const in src/shared/constants/locales.tsx if this list is going to be update
const supportedLocales = ['en', 'cn'];

module.exports = {
  i18n: {
    locales: [...supportedLocales],
    defaultLocale: 'en',
  },
  reloadOnPrerender: process.env.NODE_ENV === 'production',
  localePath: path.resolve('./public/locales'),
};
