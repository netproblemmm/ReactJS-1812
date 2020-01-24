import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/message_actions';
import { ADD_CHAT } from "../actions/chat_actions";// тут явно должно быть другое, типа GET_MESSAGE

let initialStore = {
    messages: [
        {body: 'Hello', author: null}, 
        {body: 'What is up?', author: null}
    ],
}

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        }
        //и тут, другой экшн:
        // case ADD_CHAT: {
        //     const chatId = Object.keys(store.chats).length + 1;
        //     return update(store, {
        //        chats: { $merge: {
        //            [chatId]: {
        //                title: action.title, messageList: []
        //        } } },
        //     });
        // }
        default:
            return store;
    }
 }
 