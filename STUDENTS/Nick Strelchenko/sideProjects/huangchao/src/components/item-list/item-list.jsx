import React from 'react'
import './item-list.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ListGroup } from 'react-bootstrap'

export default class ItemList extends React.Component{
    state={
        products:[]
    }
    objects = this.props.objects

    
    
    render(){
        localStorage.clear()
        
        const onButtonAddClick=(item)=>{
            let itemToParse = {name:item.name,price:item.price,quantity:1,id:item.id} 
               
            if (localStorage.length>=1){
                
                let dataToSave = JSON.parse(localStorage.getItem("products"))
                
                if (dataToSave.some(i=>i.name===itemToParse.name)){
                    
                    
                    
                    let newData = dataToSave.map((i)=>{
                        
                            if (i.name === itemToParse.name){
                                i.quantity+=1
                                
                            }
                        return i 
                    })
                    
                    dataToSave=newData
                }
                else{
                    
                    dataToSave=[...dataToSave,itemToParse]
                }
                
                localStorage.setItem("products",JSON.stringify(dataToSave))
                
            }
            else{
                
                let dataToSave = [itemToParse]
                localStorage.setItem("products",JSON.stringify(dataToSave))
                
            }
            
        }
        
        
        const ItemList = ()=>{
            const {objects}=this.props
            const listofItems=objects.map((item)=>{
                
                const {name,desc,price,weight,imgUrl}=item
                return(
                    <Col lg={4} md={6} sm={12} className="mb-5">
                        <Card border="primary">
                            <Card.Img variant="top" src={imgUrl} fluid/>
                            <Card.Body>
                                <Card.Title className='text-center'>{name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{desc}</ListGroup.Item>
                                    <ListGroup.Item>Цена: {price}р</ListGroup.Item>
                                    <ListGroup.Item>Вес порции: {weight}</ListGroup.Item>                                   
                                    <ListGroup.Item className="text-center"><Button onClick={()=>onButtonAddClick(item)}>Отложить в корзину</Button></ListGroup.Item>                                                                                       
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return <Row className='justify-content-around '>{listofItems}</Row>
        }


        return(
            <Container fluid="true"className="mt-5">               
                    <ItemList objects={this.props.objects}/>             
            </Container>
        )
    }
}