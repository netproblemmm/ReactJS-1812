export let SEND_MESSAGE = '@@message/SEND_MESSAGE'

export let sendMessage = (message, user, chat) => ({
    type: SEND_MESSAGE,
    message, user, chat   
})