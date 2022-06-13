const initState = {

};

export const themeReducer = (state = initState, action: ChangeThemeAT): any => { // fix any
    switch (action.type) {
        case "": {
            return state;
        }
        default: return state;
    }
};

export const changeThemeC = (value: string): any => ({type: 'CHANGE_THEME', bg: value} as const);
type ChangeThemeAT = ReturnType<typeof changeThemeC>