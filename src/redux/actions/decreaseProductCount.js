export const DECREASE_COUNT = 'DECREASE_COUNT'

export default function decreaseProductCount(payload){
    return{
        type: DECREASE_COUNT,
        payload
    }
}