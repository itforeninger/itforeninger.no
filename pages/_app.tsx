import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ColorStyleSheet } from "../stylesheets/colors";
import { FontStyleSheet } from "../stylesheets/fonts";
import { AnimatePresence } from "framer-motion";
import { LogoContainer } from "../components/Logo/LogoContainer";

type Props = AppProps;

const CustomApp = (appProps: Props): JSX.Element => {
  const { Component, pageProps, router } = appProps;
  return (
    <>
      <Head>
        <title>Forente IT-Foreninger</title>
      </Head>
      <ColorStyleSheet />
      <FontStyleSheet />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <LogoContainer />
    </>
  );
};

export default CustomApp;
