import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://quickstart-1b179de1.shopify.com/api/graphql",
    cache: new InMemoryCache()
});

export default client;