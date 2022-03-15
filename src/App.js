import React, { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Products from "./Components/products/Products";
import ProductDescription from "./Components/product-description/ProductDescription";
import NavBar from "./Components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CartBag from "./Components/CartBag/CartBag";

// catching errors in Graphql
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "/" })]);
const cache = new InMemoryCache();
// configuring Apollo client with GraphQl
const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <NavBar client={client} />
            <Switch>
              <Route exact path="/cart">
                <CartBag />
              </Route>
              <Route exact path="/">
                {<Redirect to="/all" />}
              </Route>
              <Route
                exact
                path="/:id"
                render={(props) => <Products client={client} {...props} />}
              />
              <Route
                path="/:id/:productId"
                render={(props) => (
                  <ProductDescription client={client} {...props} />
                )}
              />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}
