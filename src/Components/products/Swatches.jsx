import React, { Component } from 'react';

class Swatches extends Component {
    render() {
        const {product} = this.props
        return (
            <>
                {product.attributes.map((attribute) =>
                    attribute.type === "swatch" ? (
                      <div key={attribute.id} style={{ display: 'flex', justifyContent:'space-between', alignItems:'center', width:'50%' }}>
                        {attribute.items.map((item) => (
                          <div
                            style={{
                              backgroundColor: `${item.value}`,
                              width: "30px",
                              height: "30px",
                            }}
                            key={item.id}
                          ></div>
                        ))}
                      </div>
                    ) : null
                  )}
            </>
        );
    }
}

export default Swatches;