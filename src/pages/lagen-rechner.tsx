import { useContext, useEffect } from "react";
import Head from "next/head";

import { fetchEntries } from "~utils/contentfulData";

import { ContentfulData } from "~types/ContentfulData";
import { HackyAction } from "~types/HackyAction";

import { HackyActionContext, HackyActionContextType } from "~context/hacky-action-provider";

import Header from "~components/lagen-rechner/header";

export default function Recipes({ hackyAction }: HackyAction) {
  const { updateHackyActionContext } = useContext(HackyActionContext) as HackyActionContextType;

  useEffect(() => {
    updateHackyActionContext(hackyAction);
  }, []);

  return (
    <>
      <Head>
        <title>Papier Lagen Rechner</title>
      </Head>

      <Header />

      <div>Papier Lagen Rechner</div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const hackyAction = await res.map((data: ContentfulData["HackyAction"]) => {
    return {
      date: data.fields.hackyDate,
      location: data.fields.hackyLocation,
    };
  });

  return {
    props: {
      hackyAction: Object.assign({}, ...hackyAction),
    },
  };
}
