import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './banner.css'

export default class Banner extends React.Component{
    render(){
        return(
            <React.Fragment>
                { document.documentElement.clientWidth>=992 ?(
                    <Carousel interval={5000} className='text-center'>
                        <Carousel.Item>
                            <Image src="https://huangchao.ru/static/img/banner_obshee.jpg" fluid/>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="https://huangchao.ru/static/img/banner_obshee.jpg" fluid/>                    
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="https://huangchao.ru/static/img/banner_obshee.jpg" fluid/>
                        </Carousel.Item>               
                    </Carousel>
                ):(
                    <Container fluid className='pl-0 pr-0'>
                        <Image src="https://huangchao.ru/static/img/banner_obshee.jpg" fluid/>
                    </Container>
                ) }
            </React.Fragment>
            
            
        )
    }
}