import { useState, useEffect, useContext } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



export default function Login() {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState('');



    return(
        <Container fluid>
            <Row>
                <Col sm={6} className="">
                <Row className="d-flex justify-content-center align-items-center min-vh-100 text-center">
                    <div>
                        <h1>Taskmon</h1>
                        <h3> Complete your task's and collect monsters as reward</h3>
                    </div>
                </Row>
                </Col>
                <Col sm={6}className="">
                <Row className="d-flex justify-content-center align-items-center min-vh-100 text-center">
                    <div >
                        <h2>Login</h2>
                        <h4>Username</h4>
                        <h4>Password</h4>
                    </div>
                </Row>
                </Col>
                
            </Row>
        </Container>
    )
}