import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap'



export default class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                {document.documentElement.clientWidth>=992 ?(
                    <div className='headerDiv fixed-top'>
                        <Nav className='navbar nsvbar-collapsel-sm w-75 m-auto d-flex justify-content-between text-white '>
                    <div className='col-3'>
                        Волгоградский проспект, д 47, БЦ "КУБ"
                    </div>
                    <div className='col-3 text-center'>
                        <LinkContainer to='/cart'><Nav.Link className='text-white'><i style={{}} className="fa fa-shopping-cart"><span style={{color:'blue'}}>1</span></i></Nav.Link></LinkContainer>   
                    </div>
                    <div className='col-3 d-flex flex-column '>
                        <span className='text-right headerPhoneSpan'>
                            <a className="hoverTel" href="tel:+7(495)259-58-85">+7(495)259-58-85</a>
                        </span>
                        <span className='text-right headerPhoneSpan'>
                            <a className="hoverTel" href='tel:+7(977)970-66-58 '>+7(977)970-66-58 </a>
                        </span>
                    </div>
                </Nav>
                <Navbar expand="lg"className='w-75 m-auto '>
                    <LinkContainer to='/'>
                        <Navbar.Brand >
                            <img className='img-fluid w-50'
                                src='https://huangchao.ru/static/img/logo_2.png' alt="Логотип"
                            />
                            
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"style={{backgroundColor:"white"}} />
                    <Navbar.Collapse id="basic-navbar-nav menuNav">
                        <Nav className="m-auto w-75 d-flex justify-content-around">
                        <NavDropdown title="Меню" id="basic-nav-dropdown ">
                            
                            <LinkContainer to='/hot_snack'><NavDropdown.Item >Горячие закуски</NavDropdown.Item></LinkContainer>
                            <LinkContainer to='/cold_snack'><NavDropdown.Item >Холодные закуски</NavDropdown.Item></LinkContainer>
                            <LinkContainer to='/soups'><NavDropdown.Item >Супы</NavDropdown.Item></LinkContainer>
                            <LinkContainer to='/salads'><NavDropdown.Item >Салаты</NavDropdown.Item></LinkContainer>
                            
                            
                        </NavDropdown>
                        <LinkContainer to='/banket'className='text-white'><Nav.Link className='text-white'>Банкеты</Nav.Link></LinkContainer>
                        <LinkContainer to='/dostavka'className='text-white'><Nav.Link className='text-white'>Доставка</Nav.Link></LinkContainer>
                        <LinkContainer to='/stol'className='text-white'><Nav.Link className='text-white'>Хого</Nav.Link></LinkContainer>
                        <LinkContainer to='/about'className='text-white'><Nav.Link className='text-white'>О Нас</Nav.Link></LinkContainer>
                        <LinkContainer to='/contact'className='text-white'><Nav.Link className='text-white'>Контакты</Nav.Link></LinkContainer>

                        </Nav>                       
                    </Navbar.Collapse>
                </Navbar>               
                    </div>
                ):(
                    
                        <Navbar expand="lg"className='m-auto' style={{display:'flex',flexDirection:'column',backgroundColor:"black"}}>
                            <span><LinkContainer to='/cart'><Nav.Link className='text-white'><i className="fa fa-shopping-cart"></i></Nav.Link></LinkContainer></span>
                            <span className='text-right headerPhoneSpan'>
                                <a href="tel:+7(495)259-58-85">+7(495)259-58-85</a>
                            </span>
                            <span className='text-right headerPhoneSpan'>
                                <a href='tel:+7(977)970-66-58 '>+7(977)970-66-58 </a>
                            </span>
                            <LinkContainer to='/'className='text-center m-0'>
                                <Navbar.Brand >
                                    <img className='img-fluid w-75'
                                        src='./logo_2.png' alt="Логотип"
                                    />
                                    
                                </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"style={{backgroundColor:"white"}} />
                            <Navbar.Collapse id="basic-navbar-nav menuNav">
                                <Nav className="m-auto w-75 d-flex justify-content-around">
                                <NavDropdown title="Меню" id="basic-nav-dropdown ">
                                    
                                    <LinkContainer to='/hot_snack'><NavDropdown.Item className="pr-3 pl-3">Горячие закуски</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to='/cold_snack'><NavDropdown.Item className="pr-3 pl-3">Холодные закуски</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to='/soups'><NavDropdown.Item className="pr-3 pl-3">Супы</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to='/salads'><NavDropdown.Item className="pr-3 pl-3">Салаты</NavDropdown.Item></LinkContainer>
                                    <LinkContainer to='/lanch'><NavDropdown.Item className="pr-3 pl-3">Бизнес-Ланч</NavDropdown.Item></LinkContainer>
                                    
                                </NavDropdown>
                                <LinkContainer to='/banket'className='text-white'><Nav.Link className='text-white'>Банкеты</Nav.Link></LinkContainer>
                                <LinkContainer to='/dostavka'className='text-white'><Nav.Link className='text-white'>Доставка</Nav.Link></LinkContainer>
                                <LinkContainer to='/stol'className='text-white'><Nav.Link className='text-white'>Хого</Nav.Link></LinkContainer>
                                <LinkContainer to='/about'className='text-white'><Nav.Link className='text-white'>О Нас</Nav.Link></LinkContainer>
                                <LinkContainer to='/contact'className='text-white'><Nav.Link className='text-white'>Контакты</Nav.Link></LinkContainer>

                                </Nav>                       
                            </Navbar.Collapse>
                        </Navbar>           
                    
                        
                )}
            </React.Fragment>
            
               
                
            
        )
    }
}