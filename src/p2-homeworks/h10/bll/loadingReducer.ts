export type InitStateType = typeof initState
const initState = {
    load: false
}

export type ActionType = ReturnType<typeof loadingAC>


export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, load: action.load}
        }
        default:
            return state
    }
}

export const loadingAC = (load: boolean) => ({type: 'LOADING', load} as const) // fix any