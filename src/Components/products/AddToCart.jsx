import React, { Component } from "react";
import cartIcon from "../../assets/Vector.png";
import addToCart from "../../actions/addToCart";
import { connect } from "react-redux";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInCart: { ...this.props.product, count: 1, selectedOptions: [] },
    };
  }
  addToCart(e, product) {
    e.preventDefault();
    //adding user selected options to product object
    const selectedOptions = product.attributes.map((attr) => {
      const attributeName = attr.name;
      const attributeValue = attr.items[0].value;
      const option = { [attributeName]: attributeValue };
      return option;
    });
    this.setState(
      (prevState) => ({
        productInCart: {
          ...product,
          count: 1,
          totalPrice: 0,
          selectedOptions: [...selectedOptions],
        },
      }),
      () => this.addProductToCart()
    );
  }
  //adding selected product to cart
  addProductToCart() {
    const { productInCart } = this.state;
    const { dispatch, cart } = this.props;
    //avoid repeating products in cart
    if (cart.length > 0) {
      if (!cart.some((item) => item.id === productInCart.id)) {
        dispatch(addToCart(productInCart));
      }
    } else {
      dispatch(addToCart(productInCart));
    }
  }

  render() {
    const { product } = this.props;

    return (
      <div
        onClick={(e) => this.addToCart(e, product)}
        className="card-overlay"
        style={{ display: product.inStock ? "" : "none" }}
      >
        <figure>
          <img src={cartIcon} alt="add to cart icon" />
        </figure>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(AddToCart);
