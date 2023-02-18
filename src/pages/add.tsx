import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { ReactElement } from 'react';

import AddStock from '@/components/AddStock';
import Layout from '@/components/Layout';
import { DEFAULT_LOCALE } from '@/utils/constants';

const Add = () => {
  return <AddStock />;
};

Add.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale = DEFAULT_LOCALE }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['seo'])),
    },
  };
};

export default Add;
