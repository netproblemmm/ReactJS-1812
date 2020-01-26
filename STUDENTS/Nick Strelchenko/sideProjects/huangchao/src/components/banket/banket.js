import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BronStola from '../bron-stola/bron-stola'
import Tour3D from '../three-d-tour/three-d-tour'
import {LinkContainer} from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import YandexMap from '../yandex-map/yandex-map'
import ImageModalGallery from '../img-mod-gal/img-mod-gal'
import './banket.css'



export default class Banket extends React.Component{
    
    render(){
        const images=[
            'https://huangchao.ru/static/img/banket_photo_4.jpg',
            'https://huangchao.ru/static/img/banket_photo_5.jpg',
            'https://huangchao.ru/static/img/banket_photo_6.jpg'
        ]
        let greenStyle = {
            color:'green',
            fontSize:'1.2rem',
            marginBottom:'1.5rem'
            
        }
        let pFontSize={
            fontSize:'1.5rem'
        }
        let styleHeadingBron = {
            color:'lightgreen'
        }
        let headingText = ()=>{
            return(
            <h2>
                Забронируй сейчас и получи <span style={styleHeadingBron}>скидку 15%</span>
            </h2>
            )
        }
        
        return(
            <Container fluid className="mt-3">
                <Row>
                    <Col className='text-center'>
                        <h1 className='mb-0'>Банкеты и Юбилеи в китайском стиле:</h1>
                        <span style={greenStyle} >Со скидкой 15%</span>
                        <h3 className='mt-2'>Вы хотите достойно отметить банкет, свадьбу, вечеринку, день рождение, юбилей, выпускной или деловую встречу?</h3>
                        <p style={pFontSize}>Команда профессионалов ресторана китайской кухни ДИНАСТИЯ поможет сделать Ваше торжество незабываемым! Ресторан располагает вместительным банкетным залом на 200 посадочных мест, залом с традиционным китайским круглым столом и VIP-зонами на 8-10 персон, что позволяет принимать гостей самого высокого уровня. Настоящие повара из Китая приготовят блюда на любой вкус: мясные, овощные, из морепродуктов и рыбы. Меню ресторана, в котором можно найти множество интересных вариантов блюд для юбилейного вечера, славится разнообразием и изысканностью. Опытный персонал поможет Вам подобрать развлечения для гостей: выбрать шоу-программу, пригласить ведущего. Также к вашим услугам отдельная комната для караоке.</p>
                    </Col>
                </Row>
                <BronStola headingText={headingText()}/>
                <Tour3D/>                                  
                <ImageModalGallery images={images}/>                              
                <Container fluid>
                    <Row className='justify-content-center p-3'>
                        <Col className='text-center'>
                            <h2 >3-D и Фототур</h2>

                            <LinkContainer to='/gallery_restoran'>
                                <Button className='purpleButton'>
                                    Галерея ресторана
                                </Button>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
                <YandexMap/> 
            </Container>
            
        )
    }
}
