import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductCategories extends Component {
    // handling active category
    handleActive(e) {
        e.target.classList.add("active");
        const navLinks = Array.from(document.getElementsByClassName("nav-link"));
        navLinks.map((link) => {
          if (link.innerText !== e.target.innerText) {
            link.classList.remove("active");
          }
        });
      }
    
    render() {
        const {categories} = this.props
        return (
            <>
            <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={`/${category.name}`}
                  id={category.name}
                  className={
                    category.name === "all" ? "nav-link active" : "nav-link"
                  }
                  onClick={(e) => {
                    this.handleActive(e);
                  }}
                >
                  {category.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
            </>
        );
    }
}

export default ProductCategories;