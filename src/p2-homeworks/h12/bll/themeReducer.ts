const initState = {
    value: ''
};

type InitialStateType = typeof initState
type ActionType = ReturnType<typeof changeThemeC>

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, value: action.value};
        }
        default:
            return state;
    }
}

export const changeThemeC = (value: string) => ({type: 'CHANGE-THEME', value} as const)