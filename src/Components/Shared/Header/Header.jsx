import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                            <Link className='btn text-light' to='/'>Home</Link>
                            <Link className='btn text-light' to='/blogs'>Blogs</Link>

                        </Nav>
                        <div className='text-center'>
                            <Link className='btn btn-light fw-bold ' to='/account/login'>Login</Link>
                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;