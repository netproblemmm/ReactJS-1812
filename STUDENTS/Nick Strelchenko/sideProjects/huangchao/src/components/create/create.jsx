import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

export default class Create extends React.Component{
    state={
        name:'',
        password:'',
        adress:''
    }
    render(){
        
        const ListOfProducts = ()=>{
            let returnObj = JSON.parse(localStorage.getItem("products"))
            
            let objMap = returnObj.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                    </tr>    
                )
            })
            return <React.Fragment>{objMap}</React.Fragment>
        }
        const onInputChange=(e)=>{
            this.setState({
                [e.target.id]:e.target.value
            })
            console.log(this.state)
        }
        const sendOrder=(e)=>{
            e.preventDefault()
            const order={customer:{},products:JSON.parse(localStorage.getItem("products"))}
            console.log(order)
        }
        return(
            
            <Container fluid>
                <Row className="justify-content-center">
                    <Col sm={12} md={5}className='text-center p-2'>
                        <h2>Оформление заказа</h2>
                        <Form>
                            <Form.Group controlId="name">
                                <Form.Label>ИМЯ</Form.Label>
                                <Form.Control onChange={onInputChange} type="name" placeholder="Введите имя" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control onChange={onInputChange} type="phone" placeholder="Введите телефон" />
                            </Form.Group>
                            <Form.Group controlId="adress">
                                <Form.Label>Адрес</Form.Label>
                                <Form.Control onChange={onInputChange} type="adress" placeholder="Введите адрес" />
                            </Form.Group>
                           
                            <Button variant="primary" type="submit" onClick={sendOrder}>
                                Оформить заказ
                            </Button>
                        </Form>
                    </Col>
                    {localStorage.length>=1 ? (
                        <Col sm={12} md={5} className='text-center p-2'>
                            <h2>Ваш Заказ:</h2>
                            <Table responsive="true"stripped="true">
                                <thead>
                                    <tr>
                                            <th>Название</th>
                                            <th>Вес порции</th>
                                            <th>Цена</th>    
                                    </tr>
                                </thead>
                                <tbody>
                                    <ListOfProducts />    
                                </tbody>
                            </Table>
                       
                        </Col>    
                    ):(
                        <Col className='text-center m-auto'>
                            <h3>Корзина пуста</h3>
                        </Col>
                    )}
                    
                </Row>
                
            </Container>
        )
    }
}