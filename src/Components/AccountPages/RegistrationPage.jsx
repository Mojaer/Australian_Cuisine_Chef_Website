import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    return (
        <Container>
            <h3 className='text-center mt-4 fw-bold'>Please Register</h3>
            <Form className='w-50 mx-auto my-5'>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" maxLength={40} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Enter your photo Url" required />
                </Form.Group>

                <Button variant="success" type="submit" className='fw-bold'>
                    Submit
                </Button>
                <Form.Group className="mb-3" >
                    <Form.Text className="text-muted">
                        Already have an account? {<Link to='/account/login'>Login</Link>}
                    </Form.Text>
                </Form.Group>


            </Form>
        </Container>
    );
};

export default RegistrationPage;