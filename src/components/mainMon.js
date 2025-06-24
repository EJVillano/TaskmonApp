import { Button, Container, Row, Col } from 'react-bootstrap';

export default function MainMon() {

    return(
        <Container fluid className='min-vh-100 bg-primary border rounded-5 ms-5 mt-2  text-light text-center'>
            <Row className='d-flex justify-content-center p-5'>
                <Col md={10} className='text-center'>
                    <img src='/000.jpeg' className='img-fluid'/>
                </Col>
            </Row>
            <Row>
                <h3>Name</h3>
            </Row>
            <Row>
                <h4>exp</h4>
            </Row>
            
        </Container>
    )
}