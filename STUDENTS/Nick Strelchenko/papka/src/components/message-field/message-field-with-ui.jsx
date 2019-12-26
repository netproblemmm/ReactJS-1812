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
            

            <Container  maxWidth='lg' disableGutters={true}  className='containerMessages d-flex flex-column justify-content-start align-items-center p-5 ' >
                    <Box className='w-50 ' >

                    <form className='m-auto d-flex flex-column '>
                    
                    
                    
                    
                        <TextField id='name'className='m-2' variant='filled'  label="Ваше имя" onChange={onChangeText}/>
                        <TextField id='text'multiline size='medium' className='m-2' variant='filled' label="Ваше сообщение" onChange={onChangeText}/>
                        <Button className='w-75 m-auto' variant="contained" color="primary"onClick={onMessageButtonClick}>
                             Отправить сообщение
                        </Button>

                       

                        
 
                    </form>
                        

                    </Box>
                    
                    
                    {this.state.clicked &&                        
                            <Box bgcolor="info.main" color="white" className='w-100 m-5 p-4 rounded'>
                                <Message  messageList={this.state.messageList} name={this.state.name} text={this.state.text}/>
                            </Box>      
                    }
            </Container>  
            
            
        )
    }
    
}