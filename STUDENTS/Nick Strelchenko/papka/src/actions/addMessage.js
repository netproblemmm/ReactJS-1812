export const addMessage = (text,sender,ChatId)=>({
    type:"ADD_MSG",
    text,
    sender,
    ChatId
})