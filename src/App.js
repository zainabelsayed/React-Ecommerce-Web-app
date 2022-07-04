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
      return graphqlErrors;
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);
const cache = new InMemoryCache();
// configuring Apollo client with GraphQl
const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBag: false,
    };
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <NavBar
              client={client}
              prevShowBag={this.state.showBag}
              showBag={(toggle) => this.setState({ showBag: toggle })}
            />
            <Switch>
              <Route exact path="/cart">
                <CartBag showBag={this.state.showBag} />
              </Route>
              <Route exact path="/">
                {<Redirect to="/all" />}
              </Route>
              <Route
                exact
                path="/:id"
                render={(props) => (
                  <Products
                    showBag={this.state.showBag}
                    client={client}
                    {...props}
                  />
                )}
              />
              <Route
                path="/:id/:productId"
                render={(props) => (
                  <ProductDescription
                    showBag={this.state.showBag}
                    client={client}
                    {...props}
                  />
                )}
              />
            </Switch>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}
