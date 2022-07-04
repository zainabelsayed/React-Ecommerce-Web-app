import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductCategories extends Component {
   
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