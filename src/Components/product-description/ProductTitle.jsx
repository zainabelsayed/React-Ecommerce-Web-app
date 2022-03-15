import React, { Component } from "react";

export default class ProductTitle extends Component {
  render() {
    const { productName } = this.props;
    const [title, ...subTitle] = productName ? productName.split(" ") : [];
    return (
      <div className="product-name">
        <div>
          <h4>{title}</h4>
          {subTitle.join(" ")}
        </div>
      </div>
    );
  }
}
