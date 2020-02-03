import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ColorStyleSheet } from "../stylesheets/colors";

type Props = AppProps;

const CustomApp = (appProps: Props): JSX.Element => {
  const { Component, pageProps } = appProps;
  return (
    <>
      <Head>
        <title>Forente IT-Foreninger</title>
      </Head>
      <ColorStyleSheet />
      <div>FiF</div>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
