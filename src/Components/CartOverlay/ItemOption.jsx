import React, { Component } from "react";

export default class ItemOption extends Component {
  // handling the capacity option in cart overlay
  handleCapacity(option, attrName) {
    // checking for 'Color' attribute to remove the data from boxes
    if (attrName === "Color") {
      return "";
      //removing the "GB" unit to make data fit the design
    } else if (attrName === "Capacity" && !option.includes("1T")) {
      return option.length > 4
        ? option.slice(0, option.length - 2)
        : option.slice(0, option.length - 1);
    } else {
      return option;
    }
  }
  render() {
    const { option } = this.props;

    return (
      <div className="item-options__option">
        <div
          className={
            option.attrName === "Color"
              ? `color-user-option`
              : `user-option`
          }
          style={{
            backgroundColor:
              option.attrName === "Color" ? option.selectedOption : "none",
          }}
        >
          {this.handleCapacity(option.selectedOption, option.attrName)}
        </div>
        <div
          className={
            option.attrName === "Color"
              ? `color-second-option`
              : `second-option`
          }
          style={{
            backgroundColor:
              option.attrName === "Color" ? option.secondOption : "none",
          }}
        >
          {this.handleCapacity(option.secondOption, option.attrName)}
        </div>
      </div>
    );
  }
}
