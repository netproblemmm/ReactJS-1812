import update from 'react-addons-update'
import { ADD_CHAT } from '../actions/chat_actions.js'
import { SEND_MESSAGE } from '../actions/message_actions.js'

let initialStore = {
    chats: {
        1: {title: 'Chat 1', messages: {}},
        2: {title: 'Chat 2', messages: {}},
        3: {title: 'Chat 3', messages: {}}
    },
    user: { id: 1, name: 'Вася' }
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT: {
            let id = Object.keys (store.chats).length + 1
            return update (store, {
                chats: {
                    $merge: {
                        [id]: {
                            title: `Chat ${id}`,
                            messages: {} 
                        }
                    }
                }
            })
        }
        case SEND_MESSAGE: {
            let id = Object.keys (store.chats[action.chat].messages).length + 1
            return update (store, {
                chats: {
                    $merge: {
                        [action.chat]: {
                            title: store.chats[action.chat].title,
                            messages: {...store.chats[action.chat].messages,
                                [id]: {
                                    body: action.message,
                                    user: action.user
                                }
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