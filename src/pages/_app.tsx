import "~scss/_global.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import HackyActionProvider from "~context/hacky-action-provider";

import GlobalStyle from "~style/GlobalStyle";
import { customConfig } from "~style/AwesomeReactGridConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={{ awesomegrid: customConfig }}>
        <HackyActionProvider>
          <Component {...pageProps} />
        </HackyActionProvider>
      </ThemeProvider>
    </>
  );
}
