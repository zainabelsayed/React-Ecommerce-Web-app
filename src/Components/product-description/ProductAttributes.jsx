import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AttributeDetails from "./AttributeDetails";
import ProductOptions from "./ProductOptions";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        ...this.props.product,
        uid: uuidv4(),
        count: 1,
        totalPrice: 0,
        selectedOptions: [],
      },
      optionsSelected: false,
    };
  }
  // handling user selected options
  handleActive(e, attributeName, item) {
    // user selected option
    const optionName = e.target.innerText;
    this.setState(
      (prevState) => ({
        product: {
          ...this.props.product,
          uid: uuidv4(),
          count: 1,
          totalPrice: 0,
          selectedOptions: [
            ...prevState.product.selectedOptions.filter(
              (item) => !item.hasOwnProperty(`${attributeName}`)
            ),
            {
              [attributeName]:
                attributeName === "Color" ? item.value : optionName,
            },
          ],
        },
      }),
      () => {
        this.checkUserSelection();
      }
    );
  }
  checkUserSelection() {
    // adding user selected options to product object
    const userChoices = this.state.product.selectedOptions;
    const attribute = this.props.product.attributes;
    console.log(userChoices.length);
    if (userChoices.length === attribute.length) {
      this.setState(
        () => ({ optionsSelected: true }),
        console.log(this.state.optionsSelected)
      );
    }
  }

  render() {
    const { product } = this.props;
    const hasAttributes = product.attributes ? product.attributes.length : null;
    return (
      <div className="size-swatch">
        <ProductOptions
          attributes={product.attributes}
          handleActive={this.handleActive.bind(this)}
        />
        <AttributeDetails
          prices={product.prices}
          inStock={product.inStock}
          optionsSelected={
            hasAttributes === 0 ? true : this.state.optionsSelected
          }
          product={
            hasAttributes === 0 ? this.props.product : this.state.product
          }
        />
      </div>
    );
  }
}

export default ProductAttributes;
