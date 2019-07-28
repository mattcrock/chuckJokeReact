import { gql } from 'apollo-boost';
import * as React from 'react';
import Query from 'react-apollo';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';
import { StyleSheet, css } from 'aphrodite';

const GRAPHQL_API_URL = 'http://localhost:8080/graphql';

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
    },
    category: {
      float: 'left',
      display: 'inline',
      width: '25%',
      cursor: 'pointer'
    }
  });
  const JOKE_CATEGORIES = gql`
    query {
      categories
    }`;

function changeState(cat) {
    history.pushState(1, 1, "/joke/category?category=" + cat);
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
                  <div className={css(styles.category)} onClick={e =>
                    changeState(cat)
                  }>{cat}</div>
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
  
function test() {
    return (
      <div>
        this is a test
      </div >
    )
  }
  
export default test;