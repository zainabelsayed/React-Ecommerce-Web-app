import React, { Component } from "react";
import ProductPrice from "../products/ProductPrice";
import AddToCartButton from "./AddToCartButton";

export default class AttributeDetails extends Component {
  render() {
      const {prices, inStock, optionsSelected,product} = this.props
    return (
      <>
        <div>
          <p className="attribute-name">PRICE:</p>
          <ProductPrice prices={prices} />
        </div>
        <AddToCartButton
          inStock={inStock}
          optionsSelected={optionsSelected}
          product={product}
        />
      </>
    );
  }
}
