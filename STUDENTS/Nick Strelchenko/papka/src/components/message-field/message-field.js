import React from 'react'
import Message from '../message'


export default class MessageField extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:null,
            name:null,
            clicked:false,
            messageList:[]
        }
    }
    
    render(){
        
        const onChangeText=(e)=>{
            const {id,value}=e.target

            this.setState({
                [id]:value
            })
        }
        const onMessageButtonClick=()=>{
            this.setState({
                clicked:true,
               messageList:[...this.state.messageList,{name:this.state.name,text:this.state.text}]
            })
            
            
        }
        
        
        return(
            <div className='container-fluid'>
                <div className='row justify-content-center p-3'>
                    <div className='col-md-6 text-center'>
                        
                        <form>
                            <div className='form-group'>
                                <label>Текст сообщения</label>
                                <input className='form-control' id='text' type='text' onChange={onChangeText} placeholder="Введите текст сообщения"/>
                            </div>
                            <div className='form-group'>
                                <label>Ваше имя</label>
                                <input className='form-control' id='name' type='text' onChange={onChangeText} placeholder='Введите имя автора'/>
                            </div>
                            
                            
                            <button type="button" className="btn btn-primary"onClick={onMessageButtonClick}>Отправить</button>
                        </form>

                    </div>
                </div>
                
                <div className='row justify-content-center'>
                    <div className='col-7 text-center'>
                        {this.state.clicked && <Message  messageList={this.state.messageList} name={this.state.name} text={this.state.text}/>}
                    </div>
                </div>
                
            </div>
            
        )
    }
    
}