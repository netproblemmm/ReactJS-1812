import {SEND_MESSAGE, sendMessage} from '../actions/message_actions.js'

function getRndAnswer() {
    let robotAnswersArr = ['Можете повторить?', 'Не расслышал', 'Ага, хорошая погода', 'Думаю, что это так', 'Давай поболтаем']
    return (robotAnswersArr[Math.floor(Math.random() * robotAnswersArr.length)])
}

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'it') {
                let msgId = Object.keys(store.getState().messageReducer.messages).length + 1
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId,getRndAnswer(), 'bot', action.chatId))
                }, 2000)
            }
            return next(action)
    }
}