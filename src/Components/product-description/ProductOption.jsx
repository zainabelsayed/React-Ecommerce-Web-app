import React, { Component } from "react";

export default class AttributesOptions extends Component {
  testActive(e, attributeName) {
    if (this.elem.length > this.props.attribute.items.length) {
      this.elem = this.elem.filter((el) => el !== null);
    }
    if (attributeName === "Color") {
      e.target.classList.add("selected-color", "selected-option");
      // getting all 'Color' options
      this.elem.map((attributesItem) => {
        const optionColor = attributesItem.style.backgroundColor;
        const userPickedColor = e.target.style.backgroundColor;
        if (optionColor !== userPickedColor) {
          attributesItem.classList.remove("selected-color", "selected-option");
        }
        return attributesItem;
      });
    } else {
      e.target.classList.add("selected", "selected-option");

      this.elem.map((attributesItem) => {
        if (attributesItem.innerText !== e.target.innerText) {
          attributesItem.classList.remove("selected", "selected-option");
        }
        return attributesItem;
      });
    }
  }
  render() {
    const { attribute, handleActive } = this.props;
    this.elem = [];
    return (
      <div key={attribute.id}>
        <p className="attribute-name">{attribute.name.toUpperCase()}:</p>
        <div className="product-attributes">
          {attribute.items.map((item, index) => (
            <div
              className={`${attribute.name} product-attributes__size`}
              key={item.id}
              ref={(el) => this.elem.push(el)}
              onClick={(e) => {
                handleActive(e, attribute.name, item);
                this.testActive(e, attribute.name, index);
              }}
              style={{
                backgroundColor: attribute.name === "Color" ? item.value : null,
              }}
            >
              {attribute.name === "Color" ? "" : item.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
