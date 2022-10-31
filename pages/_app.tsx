import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { ColorStyleSheet } from '../stylesheets/colors';
import { FontStyleSheet } from '../stylesheets/fonts';
import { AnimatePresence } from 'framer-motion';
import { LogoContainer } from '../components/Logo/LogoContainer';
import Footer from '../components/Footer';
import { MetaImage } from '../components/Meta/MetaImage';
import { pageView } from '../utils/analytics';

type Props = AppProps;

const getPathFromUrl = (url) => {
  return url.split(/[?#]/)[0];
};

let previousPath = '';

Router.events.on('routeChangeComplete', (url) => {
  const newPath = getPathFromUrl(url);
  if (newPath !== previousPath) {
    pageView(url);
  }
  previousPath = newPath;
});

const CustomApp = (appProps: Props): JSX.Element => {
  const { Component, pageProps, router } = appProps;
  return (
    <>
      <Head>
        <title>Forente IT-Foreninger</title>
        <MetaImage />
      </Head>
      <ColorStyleSheet />
      <FontStyleSheet />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <LogoContainer />
      <Footer />
    </>
  );
};

export default CustomApp;
