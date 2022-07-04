import React, { Component } from "react";
import { getProducts } from "../../Garphql/Queries";
import "./productsStyle.css";
import Product from "./Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: this.props.match.params.id,
    };
  }
  //  fetch data from graphql
  fetchData(id) {
    this.props.client
      .query({
        query: getProducts(id),
      })
      .then((result) => {
        this.setState({
          products: result.data.category.products,
        });
      });
  }
  componentDidMount() {
    this.fetchData(this.props.match.params.id);
  }

  // update data when user choose another category
  componentDidUpdate() {
    if (this.state.id !== this.props.match.params.id) {
      this.fetchData(this.props.match.params.id);
      this.setState({
        id: this.props.match.params.id,
      });
    }
  }

  render() {
    const products = this.state.products;
    const {showBag} = this.props
    // category name in camel case
    const categoryName =
      this.state.id.charAt(0).toUpperCase() + this.state.id.slice(1);

    return (
      <>
      <div className={showBag?"darkBG":""}></div>
      <div className="container">
        <h1 className="category-name">{categoryName}</h1>
        <div className="products-wrapper">
          {products.map((product) => (
            <Product key={product.id} product={product} id={this.state.id} />
          ))}
        </div>
      </div>
      </>
    );
  }
}

export default Products;
