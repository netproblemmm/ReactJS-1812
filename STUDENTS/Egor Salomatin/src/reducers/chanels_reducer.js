//methods
import update from 'react-addons-update'

//actions
import { ADD_CHANEL } from '../actions/chanel_actions'
import { SEND_MESSAGE } from '../actions/messages_actions.js'

let initialStore = {
    chanels: { 
        1: {title: 'Top Coding', descr: 'New coding tasks!', messageList: [1]},
        2: {title: 'Cooking', descr: 'Best recepies!', messageList: [2]},
        3: {title: 'WebDev', descr: 'Web Development', messageList: [3]}
    }
}

export default function chanelsReducer (store = initialStore, action) {
    switch (action.type) {
        case ADD_CHANEL: {
            //super reducer logic
            let chanelId = Object.keys(store.chanels).length + 1
            return update (store, {
                chanels: {
                    $merge: {
                        [chanelId]: {
                            title: action.title,
                            descr: action.descr,
                            messageList: []
                        }
                    }
                }
            })
        }
        case SEND_MESSAGE: {
            return update(store, {
                chanels: { $merge: { [action.chatId]: {
                    title: store.chanels[action.chatId].title,
                    descr: store.chanels[action.chatId].descr,
                    messageList: [...store.chanels[action.chatId].messageList, action.messageId]
                } } },
            })
        }
         
        default: {
            return store
        }
    }
}