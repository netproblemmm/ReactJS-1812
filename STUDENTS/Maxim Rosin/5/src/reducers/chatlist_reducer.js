//methods
import update from 'react-addons-update'

//actions
import { ADD_CHAT } from '../actions/chat_actions.js'
import { SEND_MESSAGE } from '../actions/message_actions.js';

let initialStore = {
    chats: {
        1: { title: 'Чат 1', messagesList: [1] },
        2: { title: 'Чат 2', messagesList: [2] },
        3: { title: 'Чат 3', messagesList: [] }
    }
}

export default function chatReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHAT:  {
            //Super reducer logic
            let chatId = Object.keys(store.chats).lenght + 1;
            return update (store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title,
                            messagesList: []
                        }
                    }
                }
            })
        }
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
 
        default: {
            return store
        }
    }
}