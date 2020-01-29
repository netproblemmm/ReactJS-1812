import initReducers from './reducers'
import { createStore } from 'redux'

export default function initstore () {
    let initialStore = {}

    return createStore (initReducers, initialStore,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {})
}