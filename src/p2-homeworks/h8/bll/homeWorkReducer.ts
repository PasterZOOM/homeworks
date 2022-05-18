import {UserType} from '../HW8';

export type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}
export type CheckAT = {
    type: 'check'
    payload: number
}

export type ActionType = SortAT | CheckAT

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                state = [...state.sort((a, b) => (a.name > b.name) ? -1 : 1)]
            } else state = [...state.sort((a, b) => (a.name < b.name) ? -1 : 1)]
            return state
        }
        case 'check': {
            return state = [...state.filter((u) => u.age > action.payload)]
        }
        default:
            return state
    }
}