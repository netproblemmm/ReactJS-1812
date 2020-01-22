import React from 'react';
import {BrowserRouter,Route} from'react-router-dom'
import './App.css';
import Header from '../header'
import MessageField from '../massage-field'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App(props) {
  
  return (
    <div className="App">
      <Provider store={props.store}>
        <BrowserRouter>
          <Container className="bg-light m-auto"style={{height:"800px"}}>
            <Header />
            <Route path="/chat/:chatId" render={(props)=><MessageField  {...props}/>}/>
          </Container>
          
  
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
