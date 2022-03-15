import React, { Component } from "react";
import { connect } from "react-redux";

class TotalPrice extends Component {
  render() {
    const { cart, selectedCurruncy } = this.props;
    let total = 0;
    // calculating the total price of all products in the cart
    const totalPrice = cart.map(
      (item) =>
        (item.totalPrice =
          item.prices.filter(
            (price) => price.currency.symbol === selectedCurruncy
          )[0].amount * item.count)
    );
    totalPrice.map((itemPrice) => (total += itemPrice));
    return (
      <div className="items-total-price">
        <p>Total</p>
        <p>{`${selectedCurruncy}${total.toFixed(0)}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    selectedCurruncy: state.selectedCurruncy,
  };
};

export default connect(mapStateToProps)(TotalPrice);
