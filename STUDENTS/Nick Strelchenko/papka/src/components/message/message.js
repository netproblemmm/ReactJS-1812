import React from 'react'
import './massage.css'



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
        
        if (this.props.messageList !== prevProps.messageList) {
          this.setState({
              messageList:[...this.state.messageList,{name:this.props.name,text:this.props.text},{name:'Robot',text:`Я получил твое сообщение ${this.props.name}`}]
          })
        }
      }
    render(){
        
        const Messages=()=>{
            const messages = this.state.messageList.map((i)=>{
                
                 if (i.name==='Robot'){
                   return(
                    <React.Fragment>
                        <div className='d-flex justify-content-end mb-2 text-success '>
                            <div className='w-25 messageCard mb-3 mr-1 bg-light rounded'>
                                <h2 >Робот отвечает</h2>
                                <p>Имя автора: {i.name}</p>
                                <span>Текст сообщения: {i.text}</span>
                            </div>
                        </div>
                        
                    </React.Fragment>
                    
                   ) 
                }
                else {
                    return (

                    <div className='text-success'>
                        <div className='messageCard w-25 mb-2 bg-light rounded d-flex flex-column'>
                            <h2>Ваше сообщение</h2>
                            <p>Имя автора: {i.name}</p>
                            <span>Текст сообщения: {i.text}</span>
                        </div>
                    </div>

                    )
                }  
                

              
            })
            return messages
        }
        
        
        return(
           <Messages/> 
        )
    }
}