import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurruncy } from "../../redux/actions/ChangeCurruncy";

class CurrunciesList extends Component {

  // dispatch the changeCurruncy action from redux when user choose a curruncy
  changeCurruncy(e) {
    const { dispatch, showCurunciesList } = this.props;
    const currency = e.target.innerText.split(" ")[0];
    dispatch(changeCurruncy(currency));
    showCurunciesList(e);
  }
  render() {
    const { currncies, showModal } = this.props;
    return (
      <div
        className="currency"
        ref={this.currency}
        style={{ display: showModal ? "block" : "none" }}
      >
        <ul>
          {currncies
            ? currncies.map((curuncy) => (
                <li
                  onClick={(e) => this.changeCurruncy(e)}
                  key={curuncy.symbol}
                >
                  {`${curuncy.symbol} ${curuncy.label}`}
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default connect()(CurrunciesList);
