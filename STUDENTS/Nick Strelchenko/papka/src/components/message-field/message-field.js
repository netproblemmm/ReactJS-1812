import React from 'react'
import Message from '../message'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import './message-field.css'
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import { Transition } from 'react-transition-group';

export default class MessageField extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:null,
            name:null,
            clicked:false,
            messageList:[],
            inProp:false,
            setInProp:false
        }
    }
    
    render(){
        
        const onChangeText=(e)=>{
            const {id,value}=e.target

            this.setState({
                [id]:value
            })
        }
        const onMessageButtonClick=(e)=>{
            e.preventDefault()
            this.setState({
                clicked:true,
                setInProp:true,
                messageList:[...this.state.messageList,{name:this.state.name,text:this.state.text}]
            })
            
            
        }
        
        
        
        return(
            

            <div className='d-flex flex-column justify-content-center mt-3 p-3'>
                <form className='d-flex flex-column w-75 m-auto'>
                    <div className="mdc-text-field mdc-text-field--no-label">
                        <input id='name'  className="mdc-text-field__input"placeholder="Ваше имя"onChange={onChangeText}/>
                        <div className="mdc-line-ripple"></div>
                    </div>

                    <div className="mdc-text-field mdc-text-field--textarea mdc-text-field--no-label mt-2 mb-2">
                        <textarea id='text' className="mdc-text-field__input "placeholder="Ваше сообщение" rows="8" cols="40"onChange={onChangeText}></textarea>
                        <div className="mdc-notched-outline">
                            <div className="mdc-notched-outline__leading"></div>
                            <div className="mdc-notched-outline__notch">
                            </div>
                            <div className="mdc-notched-outline__trailing"></div>
                        </div>
                    </div>

                    <button className='mdc-button mdc-button--unelevated mdc-button-primary w-75 m-auto' onClick={onMessageButtonClick}>Отправить сообщение</button>
                </form>
                
                {this.state.clicked &&
                    <div className=' text-white w-75  p-4 rounded messagesContainer m-auto '>
                        <Message  messageList={this.state.messageList} name={this.state.name} text={this.state.text}/>    
                    </div>                                     
                }
            </div>
            
            
        )
    }
    
}