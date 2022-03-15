import React, { Component } from "react";
import { connect } from "react-redux";

class ProductPrice extends Component {
  render() {
    const { prices, selectedCurrency } = this.props;
    //getting price object corresponding to user selected curruncy
    const price = prices
      ? prices.filter((price) => price.currency.symbol === selectedCurrency)[0]
      : null;
    return (
      <>
        {prices ? (
          <p className="product-price">
            <span>{price.currency.symbol}</span>
            {price.amount}
          </p>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.selectedCurruncy,
  };
};

export default connect(mapStateToProps)(ProductPrice);
