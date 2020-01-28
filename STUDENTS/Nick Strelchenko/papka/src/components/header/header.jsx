import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './header.css'
import { connect } from 'react-redux';
import chatReducer from '../../reducers/chatReducer'
class Header extends React.Component{
    
    render(){
        
        return(
            
                <Row className='justify-content-around mt-5'style={{borderBottom:"2p solid gray"}}>
                    <Col md={5} className="header text-primary">
                        Привет User твой чат активен
                    </Col>
                </Row>
            
        )
    }
}

const mapStateToProps=(state)=>{
    return ({state})
}

export default connect(mapStateToProps)(Header)