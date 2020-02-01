// methods
import update from 'react-addons-update'

//actions
import {SEND_MESSAGE} from '../actions/message_actions.js'
import {SUCCESS_CHATS_LOADING} from '../actions/chat_actions.js'
import {ADD_CHAT} from '../actions/chat_actions.js'

let initialStore = {
    chats: {},
    isLoading: true,
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {$merge: {[action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                }}},
            })
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: {$set: action.payload.entities.chats},
                isLoading: {$set: false},
            })
        }
        case ADD_CHAT: {
            // super reducer logic
            let chatId = Object.keys(store.chats).length + 1
            return update (store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messageList: []
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
