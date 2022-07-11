import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

      <Footer />

    </>
  );
}
