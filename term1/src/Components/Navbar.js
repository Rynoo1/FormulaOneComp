import React from 'react'
import { Container, Nav, NavbarBrand } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export default function BasicNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavbarBrand href="/"> Landing</NavbarBrand>
            <Nav className='ne-auto'>
                <Nav.Link href='/'>Landing page</Nav.Link>
                <Nav.Link href='/compare'>Compare</Nav.Link>
                <Nav.Link href='/timeline'>Timeline</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

  )
}
