import {addMessage} from '../actions/addMessage.js'
export default store => next => (action) =>{
    switch(action.type){
        case "ADD_MSG":
            console.log("Экшн пришел в миддлваер::",action.sender)
            if (action.sender === "User"){
                console.log("Сработало middleware")
                setTimeout(()=> store.dispatch(addMessage("Привет я бот","Robot",[action.ChatId])),1000)
            }
    }
    return next(action)
    
}

