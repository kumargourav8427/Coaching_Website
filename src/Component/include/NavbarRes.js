import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg'


function NavbarRes() {
  return (
    <>
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand to="/">
          <img 
          src={logo}
          alt=''
          height={50}
          width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-1 fs-6 gap-4">
            <NavLink to="/" className="text-black">Home</NavLink>
            <NavLink to="/about" className='text-black'>About</NavLink>
            <NavLink to="/courses" className='text-black'>Courses</NavLink>
            <NavLink to="/teacher" className='text-black'>Teachers</NavLink>
            <NavLink to="/gallery" className='text-black'>Our Gallary</NavLink>
            <NavLink to="/contact" className='text-black'>Contact US</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
    </>
  )
}

export default NavbarRes
