import React from 'react'
import './bron-stola.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


export default class BronStola extends React.Component{
    render(){
        let headingText = this.props.headingText
        return(
            <Container fluid='true' className='p-2'>
                <Row>
                    <Col md={10} className='bronStolaWrapper m-auto'>
                        <div className='d-flex flex-column align-items-center p-5'>
                            <div className='text-white text-center p-3'>{headingText}</div>
                            <Form >
                                <Row className='bronStolaFormRow'>
                                    <Col>
                                        <Form.Control placeholder='КОЛ-ВО МЕСТ'/>
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder='ТЕЛЕФОН'/>
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder='ИМЯ'/>
                                    </Col>
                                </Row>
                                <Row className='pt-2'>
                                    <Col className='text-center'>
                                        <Button variant="danger" type="submit">
                                            ЗАБРОНИРОВАТЬ
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}