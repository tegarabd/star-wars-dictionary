import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/.netlify/functions/graphql",
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: "graphql-star-wars-api-client",
  version: "1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

function GraphqlProvider({children}) {
  return (
    <ApolloProvider client={client} >
      {children}
    </ApolloProvider>
  )
}

export default GraphqlProvider