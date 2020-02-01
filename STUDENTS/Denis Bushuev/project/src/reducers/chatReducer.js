import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/messageActions.js';
import { ADD_CHAT } from '../actions/chatActions.js';

const initialStore = {
    chats: {
        1: { title: 'Чат 1', messageList: [1] },
        2: { title: 'Чат 2', messageList: [2] },
        3: { title: 'Чат 3', messageList: [] },
    },
};

export default function chatReducer (store = initialStore, action) {
    switch(action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title, messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        };
        case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(msg => {
                const { id, chatId } = msg;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }
                } },
            });
        };
        default:
            return store;
    }
};