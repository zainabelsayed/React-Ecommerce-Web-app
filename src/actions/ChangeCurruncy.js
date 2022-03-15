export const CHANGE_CURRUNCY = 'CHANGE_CURRUNCY'

export function changeCurruncy(payload){
    return{
        type: CHANGE_CURRUNCY,
        payload
    }
}