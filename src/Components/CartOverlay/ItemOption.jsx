import React, { Component } from "react";

export default class ItemOption extends Component {
  
  render() {
    const { option } = this.props;
   
    return (
      <div className="item-options__option">
        <div className="attribute-name">
          {option.attrName}: 
        </div>
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
          {option.attrName === "Color" ? '': option.selectedOption}
        </div>
      </div>
    );
  }
}
