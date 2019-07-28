import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';

import Categories from './layouts/Categories.js';
import Random from './layouts/RandomJoke.js';
import CategoryJoke from './layouts/JokeByCategory.js';

let appStyles = StyleSheet.create({
  app: {
    textAlign: "center",
    backgroundSize: "200% 100%",
    backgroundRepeat: "repeat",
    height: "100%",
    width: "100%",
    backgroundColor: "#262e3d",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  appHeader: {
    backgroundColor: "#262e3d",
    height: "150px",
    padding: "20px",
    color: "white",
  },
  linkRandom: {
    color: 'white',
    width: '50%',
    left: '10%',
    position: 'relative',
  },
  linkCategories: {
    color: 'white',
    width: '50%',
    left: '-10%',
    position: 'relative',
  }
});
class App extends Component {
  render() {
    return (
      <div className={css(appStyles.app)}>
        <div className={css(appStyles.appHeader)}>
          <img src='https://publicdomainvectors.org/photos/nunchuck_norris.png' 
          className="App-logo" alt="chuck" />
          <h2>Chuck Norris Joke Generator</h2>
        </div>
        <Router>
          <div>
            <Link className={css(appStyles.linkCategories)} to="/categories">Categories</Link>
            <Link className={css(appStyles.linkRandom)} to="/joke/random">Random Joke</Link>
            <hr />

            <Route exact path="/" component={Random} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/joke/random" component={Random} />
            <Route path="/joke/category" component={CategoryJoke} />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;

// CATEGORIES
// const styles = StyleSheet.create({
//   categories: {
//     fontSize: 24,
//     lineHeight: '1.3em',
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   category: {
//     float: 'left',
//     display: 'inline',
//     width: '25%',
//     color: 'white',
//   }
// });

// const JOKE_CATEGORIES = gql`
//   query {
//     categories
//   }
// `;
// function changeState(cat) {
//   history.pushState(0, 0, "/joke/category?category=" + cat);
//   history.go();
// }
// const JokeCategories = () => (
//   <Query query={JOKE_CATEGORIES} >
//     {({ loading, error, data }) => {
//       if (loading) {
//         return (
//           <h2>Loading...</h2>
//         )
//       }

//       return (
//         <div>
//           <h2>
//             To see jokes in a catagory, select one below:
//           </h2>
//           <span className={css(styles.categories)}>
//             {error
//               ? error.message
//               : data.categories.map(cat => (
//                 <Link to={`/joke/category?category=${cat}`} key={cat}
//                   className={css(styles.category)}>
//                   {cat}
//                 </Link>
//               ))
//             }
//           </span>
//         </div>
//       );
//     }}
//   </Query>
// );

// function Categories() {
//   return (
//     <div>
//       <ApolloProvider client={client}>
//         < JokeCategories />
//       </ApolloProvider>
//     </div >
//   )
// }

// RANDOM JOKES
// const JOKE_RANDOM = gql`
//   query {
//     randomJoke{
//       value
//     }
//   }
// `;

// const RandomJoke = () => (
//   <Query query={JOKE_RANDOM} >
//     {({ loading, error, data }) => {
//       if (loading) {
//         return (
//           <h2>Loading...</h2>
//         )
//       }

//       return (
//         <h2>
//           {console.log(data)}
//           {error
//             ? error.message
//             : data.randomJoke.value}
//         </h2>
//       );
//     }}
//   </Query>
// );

// const Random = () => (
//   <div>
//     <ApolloProvider client={client}>
//       <h1>Random Joke </h1>
//       < RandomJoke />

//     </ApolloProvider>
//   </div >
// );

// JOKE BY CATEGORY
// const JOKE_BY_CATEGORY = gql`
//   query ($category:String) {
//     jokeByCategory(category: $category){
//       value
//     }
//   }
// `;

// function JokeByCategory(data) {
//   console.log(data)
//   // {
//   //   "category":  "animal"
//   // }
//   return (
//     <Query query={JOKE_BY_CATEGORY} variables={data} >
//       {({ loading, error, data }) => {
//         if (loading) {
//           return (
//             <h2>Loading...</h2>
//           )
//         }

//         return (
//           <h2>
//             {console.log(data)}
//             {error
//               ? error.message
//               : data.jokeByCategory.value}
//           </h2>
//         );
//       }}
//     </Query>
//   )
// };

// function CategoryJoke() {
//   const params = new URLSearchParams(window.location.search);
//   const category = params.get('category');
//   console.log(category)

//   return (
//     <div>
//       <ApolloProvider client={client}>
//         < JokeByCategory category={category} />

//       </ApolloProvider>
//     </div >
//   )
// };