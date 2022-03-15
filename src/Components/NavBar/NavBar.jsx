import React, { Component } from "react";
import { getCategoriesAndCuruncies } from "../../Garphql/Queries";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import CurruncyDropDown from "../CurrunciesDropDown/CurruncyDropDown";
import CartOverlay from "../CartOverlay/CartOverlay";
import ProductCategories from "./ProductCategories";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curuncies: [],
      categories: [],
    };
  }
// getting curruncies and categories from graphql
  componentDidMount() {
    this.props.client
      .query({
        query: getCategoriesAndCuruncies,
      })
      .then((result) => {
        this.setState({
          curuncies: result.data.currencies,
          categories: result.data.categories,
        });
      });
  }
  render() {
    const currncies = this.state.curuncies;
    const categories = this.state.categories;
    return (
      <div className="container nav-container">
        <nav>
          <ProductCategories categories={categories}/>
        </nav>
        <figure>
          <img className="logo-img" src={logo} alt="logo" />
        </figure>
        <div className="cart-and-currency">
          <CurruncyDropDown currncies={currncies} />
          <CartOverlay/>
        </div>
      </div>
    );
  }
}

export default NavBar;
