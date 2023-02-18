import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { Nullable } from '@/utils/types';

interface IProps {
  title?: Nullable<string>;
  description?: Nullable<string>;
  imageUrl?: Nullable<string>;
}

const Header = ({ title, description, imageUrl }: IProps) => {
  const { t } = useTranslation('seo');
  return (
    <Head>
      <title>{title || t('COMMON_TITLE')}</title>
      <meta property='og:title' content={title || t('COMMON_TITLE')} key='title' />
      <meta name='twitter:title' content={title || t('COMMON_TITLE')} />
      <meta property='og:type' content='website' />

      <meta name='description' content={description || t('COMMON_DESCRIPTION')} />
      <meta property='og:description' content={description || t('COMMON_DESCRIPTION')} />
      <meta name='twitter:description' content={description || t('COMMON_DESCRIPTION')} />

      <meta property='og:image' content={imageUrl || `https://iili.io/HnohjiN.md.png`} />
      <meta name='twitter:image:src' content={imageUrl || `https://iili.io/HnohjiN.md.png`} />
      <meta name='twitter:card' content='summary_large_image' />

      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover'
      />

      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Header;
