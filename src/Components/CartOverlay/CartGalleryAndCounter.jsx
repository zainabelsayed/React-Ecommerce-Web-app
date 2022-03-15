import React, { Component } from 'react'
import CartItemGallery from "./CartItemGallery";
import CartItemCounter from "./CartItemCounter";

export default class CartGalleryAndCounter extends Component {
  render() {
      const { id, count, imgSrc} = this.props
    return (
        <div className="item-gallery">
        <CartItemCounter id={id} count={count}/>
        <CartItemGallery imgSrc= {imgSrc}/>
      </div>
    )
  }
}
