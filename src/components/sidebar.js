import React, { useState, useContext } from 'react';
import { Button, Offcanvas, Nav, Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext';

export default function Sidebar(){
    
    const [show, setShow] =useState(false)

    const handleShow = () => setShow(true)

    const handleClose = () => setShow(false)

    const username = useContext(UserContext).user.username

    console.log(username)

    return(
        <>
           <Button variant='primary' onClick={handleShow} className='rounded-circle border'>
                <i class="bi bi-chevron-double-right fs-5"></i>
            </Button> 

            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header>
                <Row className='d-flex justify-content-between w-100'>
                    <Col className='p-0 m-0'>
                        <Offcanvas.Title className='p-0 m-0'>Profile</Offcanvas.Title>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <i onClick={handleClose} className="bi bi-chevron-double-left" style={{ cursor: 'pointer', fontSize: '1.5rem' }}></i>
                    </Col>
                </Row>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className='justified-content-center'>
                        <h1>{username}</h1>

                    </Row>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}