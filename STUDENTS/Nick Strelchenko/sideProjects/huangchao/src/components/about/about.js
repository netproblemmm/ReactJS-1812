import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.css'

export default class About extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col className='text-center p-5 bigTextP' >
                        <h2>Ресторан Династия</h2>
                        Ресторан династия - заведение где подаются изысканные блюда как северной так и южно-китайской кухни. Наши шеф-повара - имеют огромный опыт работы в ресторанах Поднебесной.</Col>
                </Row>
            </Container>
        )
    }
}