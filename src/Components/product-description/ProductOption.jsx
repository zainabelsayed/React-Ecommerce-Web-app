import React, { Component } from 'react'

export default class AttributesOptions extends Component {
  render() {
      const {attribute, handleActive} = this.props
    return (
        <div key={attribute.id}>
        <p className="attribute-name">
          {attribute.name.toUpperCase()}:
        </p>
        <div className="product-attributes">
          {attribute.items.map((item) => (
            <div
              className={`${attribute.name} product-attributes__size`}
              key={item.id}
              onClick={(e) =>
                handleActive(e, attribute.name, item)
              }
              style={{
                backgroundColor:
                  attribute.name === "Color" ? item.value : null,
              }}
            >
              {attribute.name === "Color" ? "" : item.value}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
