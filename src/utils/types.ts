import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type Nullable<T> = T | null;

export type UndefinedAble<T> = T | undefined;

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type StockRecord = {
  id: number;
  name: string;
  quantity: number;
  value: number;
  date: number;
};
