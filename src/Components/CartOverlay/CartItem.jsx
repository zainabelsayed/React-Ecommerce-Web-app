import React, { Component } from "react";
import CartGalleryAndCounter from "./CartGalleryAndCounter";
import CartItemDetails from "./CartItemDetails";

class CartItem extends Component {
  render() {
    const {item} = this.props
    return (
      <div className="cart-item">
        {item && (
          <>
            <CartItemDetails item={item}/>
            <CartGalleryAndCounter
              imgSrc={item.gallery}
              id={item.id}
              count={item.count}
            />
          </>
        )}
      </div>
    );
  }
}

export default CartItem;
