import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class ImageModalGallery extends React.Component{
    state={
        setShow:false,
        target:null 
      }
    render(){
        const imagesList=this.props.images
        const handleClose = () => {
            
            this.setState({
                setShow:false
            })
        }
        const handleShow=(e)=>{
            e.preventDefault()
            console.log(e.target.src)
            this.setState({
                setShow:true,
                target:e.target.src
            })
        }
        const ImageItem=()=>{
            
            const imageList = imagesList.map((image)=>{
                
                return(
                    <Col md={12} lg={4} id={image}>
                        <a href='/'onClick={handleShow}><img className='img-fluid mb-2' src={image}alt='Фото банкетов_2' /></a>
                    </Col>
                )
            })
            return imageList
        }
        const RenderGallery=()=>{
            if (this.state.setShow===false){
                return (
                    <Container fluid>
                        <Row className='justify-content-around'>                      
                            <ImageItem/>
                        </Row>
                    </Container>
                )
            }
            else
                return(
                    <Modal show={this.state.setShow} onHide={handleClose} >
                        <Modal.Header closeButton>
                        <Modal.Title>Фотография банкета</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><img className='img-fluid' src={this.state.target} alt='фото_'/></Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        </Modal.Footer>
                    
                    </Modal>
                )
        }
        return(
            <RenderGallery/>   
        )
    }
}