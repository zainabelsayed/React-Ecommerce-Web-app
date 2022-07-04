import React, { Component } from "react";
import ImgSlider from "./ImgSlider";

export default class CartItemGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCount: 0,
    };
    this.currentImg = React.createRef();
  }
  imgSlider(direction) {
    const { imgSrc } = this.props;
    const imgGalleryLength = imgSrc.length;
    const currentImg = this.currentImg.current.src;
    const { imgCount } = this.state;
    // getting the next image from the product gallery
    if (
      imgGalleryLength > 0 &&
      currentImg !== imgSrc[imgGalleryLength - 1] &&
      direction === "next"
    ) {
      this.setState((prevState) => ({
        imgCount: prevState.imgCount + 1,
      }));
    }
    // getting the prev image from the product gallery
    if (
      imgGalleryLength > 0 &&
      currentImg !== imgSrc[0] &&
      imgCount !== 0 &&
      direction === "prev"
    ) {
      this.setState((prevState) => ({
        imgCount: prevState.imgCount - 1,
      }));
    }
  }

  render() {
    const { imgCount } = this.state;
    const { imgSrc } = this.props;
    return (
      <div className="img-gallery">
        {imgSrc.length > 1 &&(
          <ImgSlider imgSlider={this.imgSlider.bind(this)}/>
        )}
        <figure className="img-gallery__show">
          <img ref={this.currentImg} src={imgSrc[imgCount]} alt="" />
        </figure>
      </div>
    );
  }
}
