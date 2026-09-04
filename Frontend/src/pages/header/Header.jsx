import React from 'react'
import './Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
          
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Employees</Nav.Link>
                <Nav.Link as={Link} to="/employee">Post Employee</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header
