import React, { Component } from "react";
import { getProduct } from "../../Garphql/Queries";
import ProductAttributes from "./ProductAttributes";
import ProductGallery from "./ProductGallery";
import "./ProductDescription.css";
import ProductTitle from "./ProductTitle";

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.productId,
      product: {},
    };
  }
  //  fetch data from graphql
  fetchData(id) {
    this.props.client
      .query({
        query: getProduct(id),
      })
      .then((result) => {
        this.setState({
          product: result.data.product,
        });
      });
  }
  componentDidMount() {
    this.fetchData(this.state.id);
  }

  render() {
    const product = this.state.product;

    return (
      <>
        <div className="container product-details-wrapper">
          <ProductGallery product={product} />
          <div className="product-details">
            <ProductTitle productName={product.name} />
            <ProductAttributes product={product} client={this.props.client} />
            {product.description ? (
              <div
                className="product-description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default ProductDescription;
