import { CHANGE_CURRUNCY } from "../actions/ChangeCurruncy";
import { ADD_TO_CART } from "../actions/addToCart";
import { INCREASE_COUNT } from "../actions/increaseProductCount";
import { DECREASE_COUNT } from "../actions/decreaseProductCount";
import { REMOVE_PRODUCT } from "../actions/removeProduct";

const intialState = {
  selectedCurruncy: "$",
  cart: [],
};

export default function curruncyReducer(state = intialState, action) {
  switch (action.type) {
    case CHANGE_CURRUNCY:
      return {
        ...state,
        selectedCurruncy: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case INCREASE_COUNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product.uid === action.payload) {
              product.count++;
            }
            return product;
          }),
        ],
      };
    case DECREASE_COUNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product.uid === action.payload && product.count > 1) {
              product.count--;
            }
            console.log(state.cart)
            return product;
          }),
        ],
      };
    case REMOVE_PRODUCT:
      return{
        ...state,
        cart: [...state.cart.filter(item=> item.uid !== action.payload )]
      }
    default:
      return state;
  }
}
