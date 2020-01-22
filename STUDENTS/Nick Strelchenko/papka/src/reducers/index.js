const initialState={
    count:1
}

export default (state=initialState,action)=>{
    switch(action.type){
        case 'INC':
        return {
          count:state.count+1
        }

      case 'DEC': 
        return {
          count: state.count - 1
        }
      default:
          return state  
    }
}


