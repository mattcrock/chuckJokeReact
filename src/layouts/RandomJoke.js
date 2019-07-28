import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import * as React from 'react';

const JOKE_RANDOM = gql`
  query {
    randomJoke{
      value
    }
  }
`;
const GRAPHQL_API_URL = 'https://82td4.sse.codesandbox.io/graphql';
const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {
      }
    }
  },
  uri: GRAPHQL_API_URL
});

const RandomJoke = () => (
  <Query query={JOKE_RANDOM} >
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <h2>Loading...</h2>
        )
      }

      return (
        <h2>
          {console.log(data)}
          {error
            ? error.message
            : data.randomJoke.value}
        </h2>
      );
    }}
  </Query>
);

function Random() {
  return (
    <div>
      <ApolloProvider client={client}>
        < RandomJoke />
      </ApolloProvider>
    </div >
  );
}

export default Random;
