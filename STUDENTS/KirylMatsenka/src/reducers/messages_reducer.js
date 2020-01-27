import update from 'react-addons-update'
import { SEND_MESSAGE } from '../actions/message_actions.js'

let initialStore = {
    messages: {},
}

export default function messageReducer (store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            let id = Object.keys (store.messages[action.chat]).length + 1
            return update (store, {
                messages: {
                    $merge: {
                        [action.chat]: {...store.chats[action.chat], 
                            [id]: {
                                body: action.message,
                                user: action.user
                            }
                        }
                    }
                }
            })
        }
        default: {
            return store
        }    
    }
} 