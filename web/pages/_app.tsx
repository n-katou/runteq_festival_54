import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import '../styles/transition.css';
import { useRouter } from 'next/router';

// Firebase関連のインポート
import { app, analytics } from '../lib/firebaseConfig';
// logEventをインポート
import { logEvent } from "firebase/analytics";

function MyApp({ Component, pageProps, router }: AppProps) {
  const nextRouter = useRouter();  // 名前を変更

  useEffect(() => {
    const logPageView = (url: string) => {
      if (analytics) {
        // ページビューを記録
        logEvent(analytics, 'page_view', {
          page_path: url,
        });
      }
    };

    // ページ遷移ごとにページビューを記録
    nextRouter.events.on('routeChangeComplete', logPageView);

    // 初回ロード時にページビューを記録
    logPageView(window.location.pathname);

    return () => {
      nextRouter.events.off('routeChangeComplete', logPageView);
    };
  }, [nextRouter.events]);

  return (
    <Layout>
      <Head>
        <title>Runteq Festival 54</title>
        <meta name="description" content="This is Runteq Festival 54 site." />
        <link rel="icon" href="/favicon.ico" />

        {/* OGPタグのデフォルト設定 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Runteq Festival 54" />
        <meta property="og:description" content="This is Runteq Festival 54 site." />
        <meta property="og:image" content="https://runteq-festival-54.vercel.app/icons/og_image.png" />
        <meta property="og:url" content="https://runteq-festival-54.vercel.app" />
        <meta property="og:site_name" content="Runteq Festival 54" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="54期の紹介ページ" />
        <meta name="twitter:image" content="https://runteq-festival-54.vercel.app/icons/og_image.png" />
      </Head>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
