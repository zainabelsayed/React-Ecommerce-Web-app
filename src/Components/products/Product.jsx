import React, { Component } from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import ProductPrice from "./ProductPrice";

class Product extends Component {
  render() {
    const { product, id } = this.props;

    return (
      <Link
        to={`/${id}/${product.id}`}
        className="product-container"
        key={product.id}
      >
        <figure
          className={
            product.inStock ? "product-figure" : "product-figure out-of-stock"
          }
        >
          <img
            className="product-image"
            src={product.gallery[0]}
            alt={product.name}
          />
          <AddToCart product={product} />
          <figcaption>{product.brand} {product.name}</figcaption>
          <div className="price">
            <ProductPrice prices={product.prices} />
          </div>
        </figure>
      </Link>
    );
  }
}

export default Product;
