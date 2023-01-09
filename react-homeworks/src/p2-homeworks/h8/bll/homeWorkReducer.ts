import {UserType} from "../HW8";

type ActionType1 = {
    type: string
    payload: 'up'
}

type ActionType2 = {
    type: string
    payload: 'down'
}

type ActionType3 = {
    type: string
    payload: 18
}

export type ActionTypes = ActionType1 | ActionType2 | ActionType3

export const homeWorkReducer = (state: UserType[], action: ActionTypes): any => { // need to fix any
    switch (action.type) {
        case 'sort_down': {
            return {...state, payload: action.payload}
        }
        case 'sort_up': {
            return {...state, payload: action.payload}
        }
        case 'check': {
            return {...state, payload: action.payload}
        }
        default:
            return state
    }
}