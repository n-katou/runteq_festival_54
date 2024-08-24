import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Runteq Festival 54</title>
        <meta name="description" content="This is Runteq Festival 54 site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;