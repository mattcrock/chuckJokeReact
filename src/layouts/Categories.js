import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from "react-router-dom";

const JOKE_CATEGORIES = gql`
  query {
    categories
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

const styles = StyleSheet.create({
  categories: {
    fontSize: 24,
    lineHeight: '1.3em',
    fontWeight: 'bold',
    color: 'white',
  },
  category: {
    float: 'left',
    display: 'inline',
    width: '25%',
    color: 'white',
  }
});

function changeState(cat) {
  history.pushState(0, "", "/joke/category?category=" + cat);
  history.go();
}
const JokeCategories = () => (
  <Query query={JOKE_CATEGORIES} >
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <h2>Loading...</h2>
        )
      }

      return (
        <div>
          <h2>
            To see jokes in a catagory, select one below:
          </h2>
          <span className={css(styles.categories)}>
            {error
              ? error.message
              : data.categories.map(cat => (
                <Link to={`/joke/category?category=${cat}`} key={cat}
                  className={css(styles.category)}>
                  {cat}
                </Link>
              ))
            }
          </span>
        </div>
      );
    }}
  </Query>
);

function Categories() {
  return (
    <div>
      <ApolloProvider client={client}>
        < JokeCategories />
      </ApolloProvider>
    </div >
  )
}

export default Categories;
