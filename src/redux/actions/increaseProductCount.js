export const INCREASE_COUNT = "INCREASE_COUNT"

export default function increaseProductCount(payload){
    return{
        type: INCREASE_COUNT,
        payload
    }
}