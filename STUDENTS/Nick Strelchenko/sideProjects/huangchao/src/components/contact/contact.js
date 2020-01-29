import React from 'react'
import './contact.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YandexMap from '../yandex-map'
export default class Contact extends React.Component{
    render(){
        return(
            <Container fluid className='mt-5 mb-5'>
                <Row>
                    <Col sm={12} md={4} className='text-center'>
                        <h3>Рeжим работы:</h3>
                        <p>С 11:00 до 23:00</p>   
                        <h3>Бизнес-ланч:</h3> 
                        <p>C 11:00 до 16:00</p>
                    </Col>
                    <Col sm={12} md={4} className='text-center'>
                        <h3>НАШ АДРЕС:</h3>
                        <p>г.Москва, ул.Волгоградский проспект,
                            д 47,м.Текстильщики</p>
                    </Col>
                    <Col sm={12} md={4} className='text-center'>
                        <h3>Способы связи с нами:</h3>
                        <p><a href='tel:+7(495)259-58-85'>+7(495)259-58-85</a></p>
                        <p>restorandi@yandex.ru</p>
                    </Col>
                </Row>
                <Row>
                    <YandexMap/>
                </Row>
            </Container>
        )
    }
}