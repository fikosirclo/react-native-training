import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
    uri: "https://lottemart.testingnow.me/graphql",
    cache: new InMemoryCache(),
});

export const query = (schema, extra = {}) => {
    return client.query({
        query: schema,
        ...extra,
    });
};

export const mutate = (schema, data, extra = {}) => {
    return client.mutate({
        variables: data,
        mutation: schema,
        ...extra,
    });
};
