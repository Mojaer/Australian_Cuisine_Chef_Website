import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div >
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#"><img className='w-50' src="/Australian-cuisine-image.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='btn text-light' to='/'>Home</NavLink>
                            <NavLink className='btn text-light ms-2' to='/blogs'>Blogs</NavLink>

                        </Nav>
                        <div className='text-center'>
                            <NavLink className='btn btn-light fw-bold ' to='/account/login'>Login</NavLink>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;