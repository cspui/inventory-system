import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/utils/types.js';

import nextI18NextConfig from '../../next-i18next.config.js';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

// @ts-ignore
export default appWithTranslation(App, nextI18NextConfig);
