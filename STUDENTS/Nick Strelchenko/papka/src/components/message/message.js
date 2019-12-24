import React from 'react'


export default class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            messageList:[]
        }
    }
    componentDidMount(){
        this.setState({
            messageList:[{name:this.props.name,text:this.props.text},{name:'Robot',text:'Первое сообщение получено'}]
        })
    }
    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.messageList !== prevProps.messageList) {
          this.setState({
              messageList:[...this.state.messageList,{name:this.props.name,text:this.props.text},{name:'Robot',text:`Я получил твое сообщение ${this.props.name}`}]
          })
        }
      }
    render(){
        
        const Messages=()=>{
            const messages = this.state.messageList.map((i)=>{
                return(
                    <div>
                        <h2>Сообщениe</h2>
                        <p>Имя автора: {i.name}</p>
                        <p>Текст сообщения: {i.text}</p>
                    </div>
                ) 
            })
            return messages
        }
        
        
        return(
           <Messages/> 
        )
    }
}