import React, { Component } from "react";
import { connect } from "react-redux";
import CurrunciesList from "./CurrunciesList";
import CurrunciesListToggler from "./CurrunciesListToggler";

class CurruncyDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  // show and hide curruncies list on user click
  showCurunciesList = (e) => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }

    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  // close the currucies list when user clicks outside the list
  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.showCurunciesList();
    }
  };

  render() {
    const { currncies, selectedCurrency } = this.props;
    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
      >
        <CurrunciesListToggler
          currncies={currncies}
          selectedCurrency={selectedCurrency}
          showModal={this.state.showModal}
          showCurunciesList={this.showCurunciesList.bind(this)}
        />
        <CurrunciesList
          currncies={currncies}
          showModal={this.state.showModal}
          showCurunciesList={this.showCurunciesList.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.selectedCurruncy,
  };
};

export default connect(mapStateToProps)(CurruncyDropDown);
