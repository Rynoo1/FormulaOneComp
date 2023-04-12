import React from 'react'
import { Container, Nav, NavbarBrand } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export default function BasicNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavbarBrand href="/"> Formula One Comp</NavbarBrand>
            <Nav className='ne-auto'>
                <Nav.Link href='/compare' style={{fontSize:18}} > <b>Compare</b> </Nav.Link>
                <Nav.Link href='/timeline' style={{fontSize:18}} > <b>Timeline</b> </Nav.Link>
            </Nav>
        </Container>
    </Navbar>

  )
}
