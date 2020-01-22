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
        
        const currentChat = this.props.state.chats[this.props.chatId-0].messageList
        console.log('now chat',currentChat)
        console.log("в месседж пришло:",this.props.state)
        console.log("length",currentChat.length)
        
        const ListOfMsg = ()=>{
            let i = 0
            const lstofmsgs = currentChat.map((item)=>{
                i+=1
                if (i%2===0){
                    return(
                        
                        <div className="d-flex justify-content-end m-3 text-white">
                            <div className='w-25 bg-info'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>Robot</h4>
                                    <p>{item}</p>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        
                        <div className="d-flex justify-content-start m-3 text-white">
                            <div className='w-25 bg-success'style={{borderRadius:"10px",}}>
                                    <h4 style={{borderBottom:"1px dotted white"}}>User</h4>
                                    <p>{item}</p>
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
