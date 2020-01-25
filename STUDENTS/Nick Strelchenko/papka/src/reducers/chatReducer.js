const initialState={
    chatCounter:3,
    chats:{
        1:{title:"Чат 1",messageList:[]},
        2:{title:"Чат 2",messageList:[]},
        3:{title:"Чат 3",messageList:[]},
    },
    botMessages:{
        1:{text:"Привет я Бот",sender:"Robot"},
        2:{text:"С тобой приятно общаться",sender:"Robot"},
        3:{text:"Я обдумаю и решу что с этим делать",sender:"Robot"}
    }
}

function chatReducer(state=initialState,action){
    
    switch(action.type){
        case "ADD_MSG": 
            const getRandomInRange = ()=>{
                return Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
            }
                
            const Updatedchats = state.chats
            
            Updatedchats[action.ChatId].messageList = [...state.chats[action.ChatId].messageList,{sender:action.sender,text:action.text,}]
            return Object.assign(
                {},state,{chats:Updatedchats}
              )
        case "ADD_CHAT":
            let prevChats=state.chats
            prevChats[state.chatCounter+1]={title:`Чат ${state.chatCounter+1}`,messageList:[]}

            console.log(prevChats[state.chatCounter+1])    
            return Object.assign(
                {},state,{chats:prevChats,chatCounter:state.chatCounter+1}
            )
        case "CLEAR":
            const EmptyChats = {
                1:{title:"Чат 1",messageList:[]},
                2:{title:"Чат 2",messageList:[]},
                3:{title:"Чат 3",messageList:[]},
            }
            return Object.assign(
                {},state,{chats:EmptyChats,chatCounter:3}
            )         
            
            
      default:
          return state  
    }
}


export default chatReducer
