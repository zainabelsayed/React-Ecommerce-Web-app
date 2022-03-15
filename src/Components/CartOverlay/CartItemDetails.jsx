import React, { Component } from "react";
import ProductTitle from "../product-description/ProductTitle";
import ProductPrice from "../products/ProductPrice";
import ItemOption from "./ItemOption";

export default class CartItemDetails extends Component {
  render() {
    const { item } = this.props;
    // getting the option that user selected and also another available option
    const options = item
      ? item.attributes.map((attr) => {
          let userSelection = {};
          item.selectedOptions.map((selected) => {
            if (attr.name === Object.keys(selected)[0]) {
              userSelection.attrName = attr.name;
              userSelection.selectedOption = selected[`${attr.name}`];
              const secondOption = attr.items.filter(
                (elem) => elem.value !== selected[`${attr.name}`]
              );
              userSelection.secondOption = secondOption[0].value;
            }
          });
          return userSelection;
        })
      : [];

    return (
      <div className="item-details">
        <ProductTitle productName={item.name} />
        <div className="item-price">
          <ProductPrice prices={item.prices} />
        </div>
        <div className="item-options">
          {options.map((option, index) => (
            <ItemOption option={option} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
