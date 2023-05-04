import React, { useContext } from 'react';
import { Container, Dropdown, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { authContext } from '../../../AuhProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(authContext)

    const alternating_image = 'data:image/png;base64,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'

    //Log out handler
    const handleLogout = () => {
        logOut()
    }
    // console.log(user)

    // name tooltip after the image 

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
                            {
                                user ?
                                    <div >
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                                <img className='user-image rounded' title={user.displayName || user.email} src={user.photoURL || alternating_image} alt="image" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item className='dropdownItem' onClick={handleLogout}>Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div> : <NavLink className='btn btn-light fw-bold ' to='/account/login'>Login</NavLink>
                            }

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;