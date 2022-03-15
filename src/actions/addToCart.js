export const ADD_TO_CART = "ADD_TO_CART"

export default function addToCart(payload){
    return{
        type: ADD_TO_CART,
        payload
    }
}