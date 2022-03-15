import React, { Component } from 'react'
import emptyCartImg from "../../assets/Empty Cart.png";

export default class CartIcon extends Component {
    
  render() {
      const { cart } = this.props
      let totalCartQuantity = 0
      // getting the actual cart quantity to notification not the items count
      cart.map(item=> totalCartQuantity+= item.count)

    return (
        <>
        <figure>
          <img src={emptyCartImg} alt="" />
        </figure>
        <div className="cart-notification">
          <p>{totalCartQuantity}</p>
        </div>
      </>
    )
  }
}
