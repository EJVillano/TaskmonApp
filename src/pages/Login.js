import { useState, useEffect, useContext } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'




export default function Login() {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false)

    const authenticate = (e) => {
        e.preventDefault();
    
        axios.post('http://localhost:4000/users/login', {
            username: username,
            password: password
        })
        .then(res => {
            console.log(res.data); // Successful response
            if (res.data && res.data.access) {
                localStorage.setItem('token', res.data.access);
                console.log(`Token: ${res.data.access}`);
            } 
        })
        .catch(error => {
            if (error.response) {
                // The request was made, and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error Response:', error.response);
                if (error.response.data && error.response.data.message) {
                    console.log(error.response.data.message); // Server error message
                    // this where to put swal 
                    if (error.response.data.message === "Username and password do not match") {
                        console.log("Incorrect Username or Password");
                    } else if (error.response.data.message === "User not found") {
                        console.log("User does not exist");
                    }

                } else {
                    console.log('An error occurred while processing your request.');
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                console.log('Please check your network connection or the server status.');
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Error setting up request:', error.message);
                console.log('An error occurred. Please try again later.');
            }
        });
    }

    useEffect(() => {
        if(username !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }, [username, password]);
    



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
                    <Form onSubmit={(e)=> authenticate(e)}>
                        <Form.Group >
                            <Form.Label >
                                Username:
                            </Form.Label>
                            <Form.Control type="string" placeholder="Enter Username" value={username} onChange={(e)=> setUsername(e.target.value)} required
                            />
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <Form.Control type="string" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}
                            required/>
                        </Form.Group>
                        <Form.Group className="text-center mt-4">
                            {isActive ?
                                <Button variant="primary" type="submit" id="submitBtn" className="w-100">Submit</Button>
                                :
                                <Button variant="danger" type="submit" id="submitBtn" disabled className="w-100">Submit</Button>
                            }
                        </Form.Group>
                        
                    </Form>
                    
                </Row>
                </Col>
                
            </Row>
        </Container>
    )
}