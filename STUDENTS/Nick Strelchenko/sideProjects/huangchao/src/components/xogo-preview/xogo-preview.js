import React from 'react'
import './xogo-preview.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class XogoPreview extends React.Component{
    render(){
        return( 
            <Container fluid className='p-5'>
                <Row>
                    <Col md={12} lg={6} className='d-flex  align-items-center'>
                        <img    className='img-fluid ' 
                                src='https://huangchao.ru/static/img/xogo.jpg'
                                alt='Фото Хого'/>
                    </Col>
                    <Col md={12} lg={6}  className='d-flex flex-column justify-content-center text-center xogoTextDiv'>
                                <h2 className=''>Китайский самовар (ХОГО)</h2>
                                <div>
                                    <p>Для простых китайцев «Хого» переводится как горячий котелок — это традиционная китайская трапеза и общения друг с другом, когда ингредиенты, подобранные по вкусу, варят в общем котелке, перемежая еду разговорами. Особенно славится хого провинции Сычуань.</p>
                                    <p>В ресторанах, в которых подают хого, используются особые столы, в их центре находится печь, на которую устанавливают горшок с бульоном или соусом, горшки разделены на два сектора, так что в них можно сразу приготовить два разных кушанья, обычно острое хого и неострое хого.</p>
                                    <p>Гостям подают сырые продукты, которые впоследствии и станут ингредиентами хого: мясо, морепродукты, овощи, тофу, лапшу, пельмени, их набор не стандартизован. Каждый посетитель самостоятельно регулирует температуру блюда, время приготовления различных ингредиентов и очерёдность их опускания в горячий бульон.</p>
                                </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}