import React from 'react'
import './three-d-tour.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Tour3D extends React.Component{
    render(){
        const frameStyle={
            width:'1200px',
            height:'600px',
            frameborder:'0',
            allowfullscreen:''
        }
        return(
            <Container fluid>
                <Row>
                    <Col sm={12} className='text-center'>
                        <h3>3D Тур по ресторану:</h3>
                        <iframe title="3DTour" className='img-fluid' style={frameStyle} src="https://www.google.com/maps/embed?pb=!4v1565256564588!6m8!1m7!1sCAoSLEFGMVFpcE5lQ0Z0clpaanpaT3BIMThCQUN0Vms3RkVtaWZSY05FN0pBRlJh!2m2!1d55.71199863217474!2d37.7248144801639!3f40.91!4f0!5f0.7820865974627469"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}