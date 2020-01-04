import React from 'react'
import Message from '../message'
import MessageField from '../message-field'
export default class App extends React.Component{
    render(){
        return(
            <div className='h-100'>
                <MessageField/>
            </div>
        )
    }
}