export const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export default function removeProduct(payload){
    return{
        type: REMOVE_PRODUCT,
        payload
    }
}