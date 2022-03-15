import React, { Component } from "react";

export default class CartTitle extends Component {
  render() {
      const {cart} = this.props
    return (
      <>
        {" "}
        <p className="cart-title">
          <strong>My Bag,</strong> {cart.length}
          {cart.length > 1 ? " items" : " item"}
        </p>
      </>
    );
  }
}
