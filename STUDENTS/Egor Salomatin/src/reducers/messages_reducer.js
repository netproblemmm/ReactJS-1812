import update from 'react-addons-update'
import { SEND_MESSAGE } from '../actions/messages_actions.js'

const initialStore = {
    messages: { 
        1: {text: 'Здравствуйте я Робот!', sender: 'bot'},
        2: {text: 'Здравствуйте я Робот!', sender: 'bot'},
        3: {text: 'Здравствуйте я Робот!', sender: 'bot'}
     }
}

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {text: action.text, sender: action.sender} } },
            });
        }
        default:
            return store;
    }
}