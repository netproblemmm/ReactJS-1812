import {combineReducers} from 'redux'
import chatReducer from './chatlist_reducer.js'
import messageReducer from './messages_reducer.js'

export default combineReducers ({chatReducer, messageReducer})