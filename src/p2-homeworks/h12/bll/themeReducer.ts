const initState = {
    background: 'dark',
};
type initStateType = {
    background: string
}
export const themeReducer = (state = initState, action: ChangeThemeAT):initStateType  => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, background: action.changeBg};
        }
        default: return state;
    }
};

export const changeThemeC = (value: string): any => ({type: 'CHANGE_THEME', changeBg: value} as const);
type ChangeThemeAT = ReturnType<typeof changeThemeC>