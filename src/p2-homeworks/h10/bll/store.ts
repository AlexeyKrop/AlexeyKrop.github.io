import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const rootReducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(rootReducers)

export default store

export type AppStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store // for dev
