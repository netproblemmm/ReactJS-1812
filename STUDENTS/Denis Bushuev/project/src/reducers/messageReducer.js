import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';
import { ADD_CHAT } from '../actions/chatActions.js';
import { object } from 'prop-types';

const initialStore = {
    messages: {
        1: {text: 'Привет!', sender: 'bot'},
        2: {text: 'Привет!', sender: 'bot'},
    }
};

export default function messageReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title, messageList: [...store.chats[action.chatId].messageList, action.messageId]
                } } },
            });
        };
        default: 
            return store;
    }
}