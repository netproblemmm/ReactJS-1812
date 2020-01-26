import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import chatReducer from '../../reducers/chatReducer'
import Message from '../message'
import {LinkContainer} from 'react-router-bootstrap'
import './message-field.css'
import {bindActionCreators} from "redux";
import {addMessage} from '../../actions/addMessage'
import {addChat} from '../../actions/newChat'
import { push } from 'connected-react-router';
import Clearer from '../clearer'
class MessageField extends React.Component{
    state={
        text:null,
        name:null,
        clicked:false,
        messageList:[]
    }
    handleNavigate = (link) => {
        this.props.push(link);
    };
    handleAddChatClick = (e)=>{
        e.preventDefault()
        this.props.addChat()
    }
    render(){
        console.log("local.storage",localStorage)
        const onChangeText=(e)=>{
            const {value}=e.target           
            this.setState({
                text:value
            })
        }
        for (let key in this.props.state.chats){
            
        }
        const ListOfChats =()=>{
            
            return Object.entries(this.props.state.chatReducer.chats).map(([key,value],i)=>{
                
                return (
                    
                    <div className="link text-primary" onClick={ () => this.handleNavigate(`/chat/${key}`)}>
                        <div key={key}>
                            {value.title}
                        </div>
                    </div>
                    
                )
            })
        } 
        
            
        
        const {chatId} = this.props.match.params        
        
        const ChatId = this.props.match.params.chatId
        return(
            
                <Row style={{height:"80%"}}>
                    <Col lg={3} sm={12} className="d-flex flex-column justify-content-center"style={{borderRight:"2px solid white",height:"100%",color:"white",fontSize:"1.5rem"}}>
                        <ListOfChats/>
                        <Button variant="success"onClick={this.handleAddChatClick}>Add Chat</Button>
                    </Col>
                    <Col lg={9} sm={12} className="d-flex flex-column" style={{wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"normal",position:"relative"}}>
                        <div style={{height:"80%",maxHeight:"80%",width:"95%",overflowY:"scroll",wordWrap:"break-word",boxSizing:"border-box",position:'absolute'}}>
                            <Message chatId={ChatId}/>
                        </div>
                        <div style={{height:"20%",position:"absolute",width:"75%",bottom:"0px",left:"12%"}}>
                            <Form>
                            <Form.Group>
                                <Form.Label>Введите текст</Form.Label>
                                <Form.Control type="text" placeholder="Текс сообщения"onChange={onChangeText}></Form.Control>
                            </Form.Group>
                            <Button variant="primary"onClick={()=>{this.props.addMessage(this.state.text,"User",ChatId)}}>Отправить</Button>
                            <Clearer/>
                            </Form>
                        </div>
                        
                    </Col>
                </Row>


            
        )
    }
}

const mapStateToProps=(state)=>{
    return ({state})
}

const mapDispatchToProps = dispatch => bindActionCreators({addMessage,push,addChat},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(MessageField)

