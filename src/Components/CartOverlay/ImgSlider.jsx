import React, { Component } from "react";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

export default class ImgSlider extends Component {
  render() {
      const {imgSlider} = this.props
    return (
      <div className="img-slider">
        <figure onClick={() => imgSlider("prev")}>
          <img src={leftArrow} alt="" />
        </figure>
        <figure onClick={() => imgSlider("next")}>
          <img src={rightArrow} alt="" />
        </figure>
      </div>
    );
  }
}
