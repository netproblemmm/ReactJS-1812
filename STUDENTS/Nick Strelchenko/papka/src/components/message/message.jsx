import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import chatReducer from '../../reducers/chatReducer'


class Message extends React.Component{
    
    render(){
       
        const currentChat = this.props.state.chatReducer.chats[this.props.chatId-0].messageList
        const ListOfMsg = ()=>{
            const lstofmsgs = currentChat.map((item)=>{
                
                if (item.sender==="Robot"){
                    return(
                        
                        <div className="d-flex justify-content-end m-3 text-white">
                            <div className='w-25 bg-info'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>{item.sender}</h4>
                                    <p>{item.text}</p>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        
                        <div className="d-flex justify-content-start m-3 text-white">
                            <div className='w-25 bg-success'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>{item.sender}</h4>
                                    <p>{item.text}</p>
                            </div>
                        </div>    
                    )
                }
            })
               
            return lstofmsgs
        }
        return(
            <ListOfMsg className='123'/>
        )
    }
}

const mapStateToProps=(state)=>{
    return ({state})
}
export default connect(mapStateToProps)(Message)
