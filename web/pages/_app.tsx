import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;