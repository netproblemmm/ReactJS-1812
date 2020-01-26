import React from 'react'
import './xogo.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import BronStola from '../bron-stola'
import XogoPreview from '../xogo-preview'
import YandexMap from '../yandex-map'
import ImageModalGallery from '../img-mod-gal/img-mod-gal'
export default class Xogo extends React.Component{
    
    render(){
        const images =[
            'https://huangchao.ru/static/img/banket_photo_1.jpg',
            'https://huangchao.ru/static/img/banket_photo_2.jpg',
            'https://huangchao.ru/static/img/banket_photo_3.jpg',
            'https://huangchao.ru/static/img/banket_photo_4.jpg',
            'https://huangchao.ru/static/img/banket_photo_5.jpg',
            'https://huangchao.ru/static/img/banket_photo_6.jpg',
            'https://huangchao.ru/static/img/banket_photo_7.jpg',
            'https://huangchao.ru/static/img/banket_photo_8.jpg',
            'https://huangchao.ru/static/img/banket_photo_9.jpg',
            'https://huangchao.ru/static/img/banket_photo_10.jpg',
            'https://huangchao.ru/static/img/banket_photo_14.jpg',
            'https://huangchao.ru/static/img/banket_photo_15.jpg',
        ]    
        return(
            <Container fluid className='mt-3'>
                <BronStola headingText={'Бронь стола Хого'}/>
                <XogoPreview/>
                <Row >
                    <Col  className='d-flex flex-column '>
                        <h2 className='text-center'>Самые популярные наборы для ХОГО</h2>
                        <p className='text-center'>Самые популярные наборы для ХОГОСамые популярные наборы для ХОГОСамые популярные наборы для ХОГО</p>   
                    </Col>
                </Row>    
                <Row className='mt-3 mb-5'>
                    <Col>
                        <Image fluid src='https://huangchao.ru/static/img/page_xogo_photo_1.jpg'/>
                        
                    </Col>
                    <Col>
                        <Image fluid src='https://huangchao.ru/static/img/page_xogo_photo_2.jpg'/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={{span:4}} className='mb-5' >
                        <Image fluid src='https://huangchao.ru/static/img/nashi_gosti_1.jpg'/>
                    </Col>
                    <Col sm={12} md={4} className='mb-5'>
                        <Image fluid src='https://huangchao.ru/static/img/nashi_gosti_2.jpg'/>
                    </Col>
                    <Col sm={12} md={4} className='mb-5'>
                        <Image fluid src='https://huangchao.ru/static/img/nashi_gosti_3.jpg'/>
                    </Col>
                </Row> 
                <ImageModalGallery images={images}/>
                <YandexMap/>
            </Container>
        )
    }
}