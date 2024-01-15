import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom" ;
import { useSelector } from 'react-redux';
const NavBar = () => {
    const  cartProducts = useSelector (state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href=''> Redux toolkit</Navbar.Brand>
        <Nav >
          <Nav.Link to="/products" as={Link} >Products</Nav.Link>
          
        </Nav>
        <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
      <Nav.Link to="/Cart" as={Link}> My Cart {cartProducts.length} </Nav.Link>
        </Navbar.Collapse>
    </Container>
  </Navbar>

    
  )
}

export default NavBar