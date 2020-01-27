import { combineReducers } from 'redux'
import chanelsReducer from './chanels_reducer'
import messageReducer from './messages_reducer'

export default combineReducers ({ chanelsReducer, messageReducer })