import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartButton extends Component {
  render() {
    const { text, closeCartOverlay } = this.props;
    // its a button for the view bag and checkout buttons which redirects to the cart page
    return (
      <Link
        to={"/cart"}
        onClick={() => closeCartOverlay()}
        className={
          text === "VIEW BAG"
            ? "cart-button cart-bag-button"
            : "cart-button checkout-button"
        }
      >
        {text}
      </Link>
    );
  }
}
