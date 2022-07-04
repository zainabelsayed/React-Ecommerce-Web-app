import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTitle from "./CartTitle";
import TotalPrice from "./TotalPrice";
import CartButton from "./CartButton";

export default class CartItems extends Component {
  render() {
    const { cart, showBag, closeCartOverlay } = this.props;
    return (
      <div
        className="cart-overlay"
        style={{ display: showBag ? "block" : "none" }}
      >
        <CartTitle cart={cart} />
        {cart ? (
          <ul>
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
        ) : null}
        <TotalPrice />
        <div className="dflex">
          <CartButton text="VIEW BAG" closeCartOverlay={closeCartOverlay} />
          <CartButton text="CHECKOUT" closeCartOverlay={closeCartOverlay} />
        </div>
      </div>
    );
  }
}
