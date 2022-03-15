import React, { Component } from "react";
import { connect } from "react-redux";
import addToCart from "../../actions/addToCart";

class AddToCartButton extends Component {
  // adding user selected product to cart
    addToBag() {
        const { dispatch, cart,product,inStock,optionsSelected } = this.props;
       //avoid repeating products in cart
        if (!cart.some(item => item.id === product.id) && optionsSelected && inStock) {
          dispatch(addToCart(product));
        }
      }
  render() {
      const {inStock, optionsSelected} = this.props
    return (
      <>
        <a
          className="addToCart"
          style={{
            backgroundColor: inStock ? "#5ECE7B" : "#A6A6A6",
            cursor:
              inStock && optionsSelected 
                ? "pointer"
                : "not-allowed",
          }}
          onClick={() => this.addToBag()}
        >
          {inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </a>
      </>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      cart: state.cart,
      selectedCurruncy: state.selectedCurruncy,
    };
  };

export default connect(mapStateToProps)(AddToCartButton)