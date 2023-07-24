import React from 'react'
import { Container, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export default function BasicNavbar() {
  return (
    <Navbar variant="dark" className='secondary'>
        <Container>
            <NavbarBrand href="/"> <h3> Formula One Comp </h3> </NavbarBrand>
            <Nav className='ms-auto me-3'>
                <NavLink href='/compare' className='linknav me-2' > <h4>Compare</h4>  </NavLink>
                <Nav.Link href='/timeline' className='linknav' > <h4>Timeline</h4> </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
