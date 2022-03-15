import React, { Component } from "react";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

class CartOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBag: false,
    };
  }
  // show the cart overly
  showCartOverlay() {
    if (!this.state.showBag) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    this.setState((prevState) => ({
      showBag: !prevState.showBag,
    }));
  }
  // hide the cart overly when user click outside the cart overly
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.showCartOverlay();
    }
  };
  render() {
    const { cart } = this.props;
    const showBag = this.state.showBag;
    return (
      <div
        ref={(cartNode) => {
          this.node = cartNode;
        }}
      >
        <div onClick={() => this.showCartOverlay()}>
          <CartIcon cart={cart} />
        </div>
        <CartItems cart={cart} showBag={showBag} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartOverlay);
