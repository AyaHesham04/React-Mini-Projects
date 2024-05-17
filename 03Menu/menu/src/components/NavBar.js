import React, { useState } from 'react'
import { Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'

const NavBar = ({filterbySearch}) => {
  
  const [searchValue, setSearchValue]= useState('');

  const onSearch=(e)=>{
    e.preventDefault(); //to prevent reload due to form submit
    filterbySearch(searchValue);
    setSearchValue('')
  }
  
  return (
    <Row>
       <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#"><div className='brand-color'>New Restaurant</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search..."
              className="mx-2"
              onChange={(e)=> setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={(e)=>onSearch(e)} className='btn-search'>Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar
