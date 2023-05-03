import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa'


const LoginPage = () => {
    return (
        <Container>
            <h3 className='text-center mt-4 fw-bold'>Please login</h3>
            <Form className='w-50 mx-auto my-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit" className='fw-bold'>
                    Submit
                </Button>
                <Form.Group className="mb-3" >
                    <Form.Text className="text-muted">
                        Do not have an account? {<Link to='/account/register'>Register</Link>}
                    </Form.Text>
                </Form.Group>
                <div className='d-flex justify-content-start'>
                    <Button variant="outline-primary" className='fw-bold'><FaGoogle></FaGoogle> Sign in with Google</Button>
                    <Button variant="outline-dark" className='ms-4 fw-bold'><FaGithub></FaGithub> Sign in with GitHub</Button>
                </div>

            </Form>
        </Container>
    );
};

export default LoginPage;