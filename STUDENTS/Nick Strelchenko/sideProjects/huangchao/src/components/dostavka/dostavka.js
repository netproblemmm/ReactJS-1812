import React from 'react'
import './dostavka.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BronStola from '../bron-stola/bron-stola'
import YandexMap from '../yandex-map/yandex-map' 
export default class Dostavka extends React.Component{
    render(){
        return(
            <div>
            <Container>
                <Row>
                    <Col className='d-flex flex-column text-center'>
                        <h1 className='m-5'>Доставка еды</h1>
                        <h2>Уважаемые гости</h2>
                        <p className='p-2 '>У нас действует доставка блюд из ресторана ДИНАСТИЯ до Вашего дома или офиса.(Стоимость доставки:200р.) Также Вы можете заказать еду через нашего партнера: Яндекс.Еда</p>
                    </Col>
                </Row>
            </Container>
            <BronStola headingText={'Заказать доставку еды'}/>
            <Col className='text-center'>
                <h2 className='text-center'>Наши партнеры:</h2>
                <div className='d-flex justify-content-center '>
                    <img className='img-fluid' src='https://huangchao.ru/static/img/yandex_eda.png' alt='Доставка через Яндекс.Еда'/>
                    <img className='img-fluid' src='https://huangchao.ru/static/img/delivery.png' alt='Доставка через Деливери Клаб'/>
                </div>
            </Col>
            <YandexMap/>
            </div>
        )
    }
}