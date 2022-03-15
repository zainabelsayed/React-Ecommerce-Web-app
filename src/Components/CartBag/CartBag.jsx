import React, { Component } from 'react'
import CartItem from '../CartOverlay/CartItem'
import './CartBag.css'
import { connect } from 'react-redux'

class CartBag extends Component {
  render() {
    const { cart } = this.props
    return (
      <div className='container cart-bag'>
        <h1>CART</h1>
        {cart ? (
          <ul>
            {cart.map((item, index) => (
              <CartItem item={item} key={index}/>
            ))}
          </ul>
        ) : null}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    cart:state.cart
  }
}

export default connect(mapStateToProps)(CartBag)
