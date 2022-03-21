import React, { Component } from "react";
import { connect } from "react-redux";
import increaseProductCount from "../../redux/actions/increaseProductCount";
import decreaseProductCount from "../../redux/actions/decreaseProductCount";
import removeProduct from "../../redux/actions/removeProduct";

class CartItemCounter extends Component {
  // increase the product count in the cart
  increaseCount(id) {
    const { dispatch } = this.props;
    dispatch(increaseProductCount(id));
  }
  decreaseCount(id) {
    const { dispatch, count } = this.props;
    if (count > 1) {
      // decrease the product count in the cart
      dispatch(decreaseProductCount(id));
    } else {
      // dispatch the remove product action the user decreased the product count to less than one
      dispatch(removeProduct(id));
    }
  }
  render() {
    const { id, count } = this.props;
    return (
      <div className="item-counter">
        <div onClick={() => this.increaseCount(id)}>+</div>
        <p>{count}</p>
        <div onClick={() => this.decreaseCount(id)}>-</div>
      </div>
    );
  }
}

export default connect()(CartItemCounter);
