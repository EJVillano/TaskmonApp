import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import MainMon from '../components/mainMon';

export default function Home(){

    return(
        <>
            <Sidebar/>
            <Col md={4}>
                <MainMon/>
            </Col>
            
        </>
    )
 }