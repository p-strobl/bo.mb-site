import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import HackyActionProvider from "~context/hacky-action-provider";

import GlobalStyles from "~styles/global-styles";
import { customConfig } from "~styles/lib/awesome-react-grid-config";

import { GridOverlay } from "~dev/grid-overlay";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyles />

      <ThemeProvider theme={{ awesomegrid: customConfig }}>
        <HackyActionProvider>
          {process.env.NODE_ENV === "production" ? null : <GridOverlay />}
          <Component {...pageProps} />
        </HackyActionProvider>
      </ThemeProvider>
    </>
  );
}
