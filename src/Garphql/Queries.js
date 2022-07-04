import { gql } from "@apollo/client";

// filtering products according to category query 
export const getProducts = (id) => {
  return gql`
  query {
    category(input:{title: \"${id}\"}){
    products{
      id
      name
      inStock
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
    }
  }
  `;
};

// getting all categories name and curruncies query
export const getCategoriesAndCuruncies = 
gql`
query {
  currencies {
    label
    symbol
  }
  categories {
    name
  }
}
`

// getting product with a certain id 
export const getProduct = (id) => {
  return gql`
  query {
      product(id: \"${id}\"){
        id
      name
      inStock
      description
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
    }
  `
}