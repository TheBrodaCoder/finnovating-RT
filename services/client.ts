import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        keyFields: ["media"],
      },
    },
  }),
  link: new HttpLink({
    uri: "https://graphql.anilist.co",
    fetchOptions: {
      method: "POST",
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }),
});

export default client;
