import React, { Component } from "react";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

class CartOverlay extends Component {
  // show the cart overly
  showCartOverlay() {
    const {showBag,prevShowBag} = this.props
    if (!prevShowBag) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    showBag(!prevShowBag)
  }
  // hide the cart overly when user click outside the cart overly
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.showCartOverlay();
    }
  };
  //hide cart overlay when redirect
  closeCartOverlay() {
    const {showBag} = this.props
    showBag(true)
    this.showCartOverlay();
  }
  render() {
    const { cart,prevShowBag } = this.props;
    return (
      <div
        ref={(cartNode) => {
          this.node = cartNode;
        }}
      >
        <div onClick={() => this.showCartOverlay()}>
          <CartIcon cart={cart} />
        </div>
        <CartItems
          cart={cart}
          showBag={prevShowBag}
          closeCartOverlay={this.closeCartOverlay.bind(this)}
        />
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
