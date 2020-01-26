import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'
export default class Footer extends React.Component{
    render(){
        return(
            <div className='back'>
                <Container fluid='true' className='text-white backDiv' >
                    <Row className="backDiv">
                        <Col md={3}className='text-center d-flex flex-column p-2 backDiv'>
                            <h3>О Нас</h3>
                            <span>Наша команда</span>
                            <span>Фотогалерея блюд</span>
                            <span>Стол Хого</span>
                        </Col>
                        <Col md={3}className='text-center d-flex flex-column p-2 backDiv'>
                            <h3>Наши Залы</h3>
                            <span>Вип-Залы</span>
                            <span>Общий зал</span>
                        </Col>
                        <Col md={3}className='text-center d-flex flex-column p-2 backDiv'>
                            <h3>Режим Работы</h3>
                            <span>Работаем с 11 до 23:00</span>
                            <span>Бизнес-Ланч с 11 до 16:00</span>
                            <span>Афтерланч с 15:30 до 18:00</span>
                        </Col>
                        <Col md={3}className='text-center d-flex flex-column p-2 backDiv'>
                            <h3>Контакты</h3>
                            <span>Телефон:+7(495)259-58-85</span>
                            <span>E-mail - restorandi@yandex.ru</span>
                            <span>Адрес: Волгоградский
                                    проспект д 47</span>

                        </Col>
                    </Row>
                    <Row className='w-75 m-auto p-2 '>
                        <Col md={2} className='d-flex justify-content-center align-items-center'>
                            <img src='https://huangchao.ru/static/img/logo_2.png' className='img-fluid w-50'alt="Логотип"/>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center'>
                            Ресторан "Династия" 2019 все права защищены.
                        </Col>
                    </Row>
                </Container>
            </div>
            
            
        )
    }
}