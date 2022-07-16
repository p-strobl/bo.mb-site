import type { AppProps } from "next/app";
import Head from "next/head";

import "~scss/_global.scss";

import GlobalStyle from "~style/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}
