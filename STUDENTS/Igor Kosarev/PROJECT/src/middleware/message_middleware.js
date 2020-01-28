import { SEND_MESSAGE, sendMessage } from '../actions/message_actions.js'

export default store => next => (action) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender === 'You') {
        let msgArr = store.getState().messagesReducer.roboMessages
        let id = getRandomInt(msgArr.length)
        console.log(store.getState().messagesReducer.roboMessages)
        setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messagesReducer.messages).length + 1,
          msgArr[id].body, msgArr[id].author, action.chatId)), 1000)
      }
  }
  return next(action)
}