import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
export default class Cart extends React.Component{
    
    state={
        items:[{id:1,name:"Баклажаны с мясом",price:200,quantity:2,},{id:2,name:'Медуза',price:100,quantity:3},{id:3,name:"obj3",price:300,quantity:5}],
        listofitems:JSON.parse(localStorage.getItem("products"))
    }
    
    
    render(){
        const onButtonDeleteClick=(e)=>{
            let newItems = this.state.listofitems.filter((i) => i.id !== Number(e.target.id) )
            console.log(this.state.listofitems)    
            this.setState({
                listofitems: newItems
            })
        }
        const TableRowItemsList = ()=>{
            
            
            const itemsMap = this.state.listofitems.map((item)=>{  
                let totalPrice=item.price*item.quantity
                
                return(
                    <tr id={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td><Button id={item.id} variant="primary" onClick={onButtonDeleteClick}>Убрать</Button></td>
                        <td>{item.price}</td>
                        <td>{totalPrice}</td>
                    </tr>
                )
                
            })
            return(
                <tbody>
                    {itemsMap}
                </tbody>
                
            )
        }
        
        return(
            <React.Fragment>
            {this.state.listofitems === null ? (
                <h2>Корзина пуста</h2>
            ):(
                <Container  className='mt-3 mb-3 text-center'>
                <Table stripped="true" responsive>
                    <thead>
                        <tr>
                            <td>Название</td>
                            <td>Количество</td>
                            <td>Убрать</td>
                            <td>Цена за штуку</td>
                            <td>Цена</td>
                        </tr>
                    </thead>
                    <TableRowItemsList/>
                </Table>
                <Button variant="primary"className="m-2">Вернуться к списку</Button>
                <LinkContainer to='/create'className='text-white'><Button variant="success"className="m-2">Оформить</Button></LinkContainer>
                
                </Container>
            )}
            </React.Fragment>
            
            
        )
    }
}