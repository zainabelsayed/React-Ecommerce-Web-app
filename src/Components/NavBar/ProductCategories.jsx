import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductCategories extends Component {
    // handling active category
    handleActive(e) {
        e.target.classList.add("active");
        const navLinks = Array.from(document.getElementsByClassName("nav-link"));
        navLinks.map((link) => {
          if (link.innerText !== e.target.innerText) {
            link.classList.remove("active");
          }
          return link
        });
      }
    
    render() {
        const {categories} = this.props
        return (
            <>
            <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <NavLink
                  to={`/${category.name}`}
                  id={category.name}
                  className="nav-link"
                  onClick={(e) => {
                    this.handleActive(e);
                  }}
                >
                  {category.name.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
            </>
        );
    }
}

export default ProductCategories;