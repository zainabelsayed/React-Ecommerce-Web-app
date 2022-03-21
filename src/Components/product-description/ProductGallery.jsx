import React, { Component } from "react";

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageShow: "",
    };
  }
  // changing image in image gallery on click
  getImageSource(e) {
    this.setState({
      imageShow: e.target.src,
    });
  }
  render() {
    const { product } = this.props;
    const imageShow = this.state.imageShow;
    return (
      <div className="image-gallery">
        <div className="image-gallery__images">
          {product.gallery
            ? product.gallery.map((image, index) => (
                <figure key={index}>
                  <img
                    onClick={(e) => this.getImageSource(e)}
                    src={image}
                    alt=""
                  />
                </figure>
              ))
            : null}
        </div>
        <div className="image-gallery__show">
          <figure>
            {product.gallery ? (
              <img src={imageShow ? imageShow : product.gallery[0]} alt={product.name} />
            ) : null}
          </figure>
        </div>
      </div>
    );
  }
}

export default ProductGallery;
