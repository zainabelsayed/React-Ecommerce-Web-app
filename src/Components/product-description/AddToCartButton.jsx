import React, { Component } from "react";
import { connect } from "react-redux";
import addToCart from "../../redux/actions/addToCart";

class AddToCartButton extends Component {
  // adding user selected product to cart
  addToBag() {
    let { dispatch, cart, product, inStock, optionsSelected } = this.props;
    //avoid repeating products in cart

    // getting items same product with different attributes
  const samIdItem = cart.filter(item=> item.id === product.id)
  // reorder selected options array
  samIdItem.map(item =>{
      item.selectedOptions.map(option=>{
        product.selectedOptions.map(userOption=>{
          const userAttr=Object.keys(userOption)[0] 
          const cartAttr= Object.keys(option)[0]
          const index=item.selectedOptions.indexOf(option)
          const indexProd = product.selectedOptions.indexOf(userOption)
          if(userAttr === cartAttr && index !== indexProd){
            product.selectedOptions[indexProd] = product.selectedOptions[index]
            product.selectedOptions[index]=userOption
            console.log(cartAttr,index)
            console.log(userAttr, indexProd)
          }
          return userOption
        })
        return option
      })
      return item
    })
    
    //avoid repeating products in cart
    if (
      !cart.some(
        (item) =>
          (JSON.stringify(item.selectedOptions) ===
          JSON.stringify(product.selectedOptions)) || (JSON.stringify(item.selectedOptions) ===
          JSON.stringify(product.selectedOptions.reverse()))
      ) &&
      optionsSelected &&
      inStock
    ) {
      if (!product.hasOwnProperty("totalPrice")) {
        product = { ...product, totalPrice: 0, count: 1 };
      }
      dispatch(addToCart(product));
    }
  }
  render() {
    const { inStock, optionsSelected } = this.props;
    return (
      <>
        <button
          className="addToCart"
          style={{
            backgroundColor: inStock ? "#5ECE7B" : "#A6A6A6",
            cursor: inStock && optionsSelected ? "pointer" : "not-allowed",
          }}
          onClick={() => this.addToBag()}
        >
          {inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </button>
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

export default connect(mapStateToProps)(AddToCartButton);
