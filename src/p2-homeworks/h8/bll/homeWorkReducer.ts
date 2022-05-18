import {UserType} from "../HW8";

type homeWorkReducerActionType = {
    type: string, payload: string | number
}
export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                return state.map(s => ({...s})).sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if(action.payload === 'down'){
                return state.map(s => ({...s})).sort((a, b) => a.name > b.name ? -1 : 1)
            }
            return state
        }
        case 'check': {
            return state.filter(s => s.age > action.payload)
        }
        default: return state
    }
}