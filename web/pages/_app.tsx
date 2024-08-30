import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import '../styles/transition.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Runteq Festival 54</title>
        <meta name="description" content="This is Runteq Festival 54 site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode='wait'>
        <Component key= {router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
