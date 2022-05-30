

const initState = {
    loading: false
}
type initStateType = typeof initState
export const loadingReducer = (state = initState, action: LoadingAT): initStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'SET-LOADING',
        loading: loading
    } as const
}
export type LoadingAT = ReturnType<typeof loadingAC>