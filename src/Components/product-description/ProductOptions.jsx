import React, { Component } from 'react'
import ProductOption from './ProductOption'

export default class ProductOptions extends Component {
  render() {
      const {attributes,handleActive} = this.props
    return (
     <>
     {attributes
          ? attributes.map((attribute) => (
              <ProductOption
                attribute={attribute}
                handleActive={handleActive}
              />
            ))
          : null}
     </>
    )
  }
}
