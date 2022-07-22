import { useContext, useEffect } from "react";

import { fetchEntries } from "~utils/contentfulData";

import { ContentfulData } from "~types/ContentfulData";
import { HackyAction } from "~types/HackyAction";

import { HackyActionContext, HackyActionContextType } from "~context/hacky-action-provider";

import Home from "~layout/Home";

export default function Index({ hackyAction }: HackyAction) {
  const { updateHackyActionContext } = useContext(HackyActionContext) as HackyActionContextType;

  useEffect(() => {
    updateHackyActionContext(hackyAction);
  }, []);

  return <Home />;
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
