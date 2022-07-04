import React, { Component } from "react";

export default class ProductTitle extends Component {
  render() {
    const { productName, productBrand } = this.props;

    return (
      <div className="product-name">
        <div>
          <h4>{productBrand}</h4>
          {productName}
        </div>
      </div>
    );
  }
}
