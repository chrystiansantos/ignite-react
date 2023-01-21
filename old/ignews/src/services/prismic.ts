import * as prismic from "@prismicio/client";
/* import * as prismicNext from "@prismicio/next"; */
import sm from "../../sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const prismicClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config,
  });

  return client;
};
