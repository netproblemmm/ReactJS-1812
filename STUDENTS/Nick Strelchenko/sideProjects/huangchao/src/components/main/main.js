import React from 'react'
import './main.css'
import BronStola from '../bron-stola/bron-stola'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import YandexMap from '../yandex-map/yandex-map'
import XogoPreview from '../xogo-preview'
import {LinkContainer} from 'react-router-bootstrap'



export default class Main extends React.Component{
    render(){
        let headingText = 'Бронь Стола'
        
        return(

            <div>
                <Container fluid className='p-3 mainTextContainer'>
                    <Row>
                        <Col className='text-center'>
                            <h1>ЛУЧШИЙ КИТАЙСКИЙ РЕСТОРАН В ЦЕНТРЕ МОСКВЫ</h1>
                            <p className='p-2'>Ресторан «ДИНАСТИЯ» - место для самых искушенных ценителей традиционной кухни Китая. В меню – не только полюбившийся Россиянам кисло-сладкий соус и утка по-пекински, но и битые огурцы, медузы, окра и признанный деликатес. Профессиональные повара ресторана ежедневно закупают свежие продукты, подвергают тепловой обработке и подают к столу. Может быть, поэтому в «Династии» часто обедают высокопоставленные гости из Китая. К вашим услугам зал со знаменитым китайским круглым столом, 8 VIP-зон, где можно провести переговоры, банкетный зал и отдельное помещение под караоке.</p>
                        </Col>
                    </Row>
                </Container>

                <BronStola headingText={headingText}/>
                <XogoPreview/>
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
             </div>
        )
    }
}