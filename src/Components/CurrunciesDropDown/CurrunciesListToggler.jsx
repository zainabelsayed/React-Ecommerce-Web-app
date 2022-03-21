import React, { Component } from 'react'
import downArrow from "../../assets/down-arrow.png";
import upArrow from "../../assets/up-arrow.png";

export default class CurrunciesListToggler extends Component {
  render() {
      const {selectedCurrency, currncies, showCurunciesList, showModal} = this.props
    return (
        <div onClick={(e) => showCurunciesList(e)}>
        {currncies[0] && (
          <div className="selected-curruncy">
            <p>{selectedCurrency}</p>{" "}
            <figure>
              <img src={showModal?downArrow : upArrow} alt='list arrow' />
            </figure>
          </div>
        )}
      </div>
    )
  }
}
