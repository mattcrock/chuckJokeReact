import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const JOKE_BY_CATEGORY = gql`
  query ($category:String) {
    jokeByCategory(category: $category){
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

function JokeByCategory(data) {
  console.log(data)
  // {
  //   "category":  "animal"
  // }
  return (
    <Query query={JOKE_BY_CATEGORY} variables={data} >
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
              : data.jokeByCategory.value}
          </h2>
        );
      }}
    </Query>
  )
};

function CategoryJoke() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  console.log(category)

  return (
    <div>
      <ApolloProvider client={client}>
        < JokeByCategory category={category} />

      </ApolloProvider>
    </div >
  )
};

export default CategoryJoke;
