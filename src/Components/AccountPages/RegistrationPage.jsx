import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuhProvider/AuthProvider';

const RegistrationPage = () => {

    const { register, user, updateUser } = useContext(authContext)
    const [error, setError] = useState('')

    if (user) {
        console.log(user)
    }



    const handleRegistration = (event) => {
        event.preventDefault();

        const form = event.target
        const email = form.email.value;
        const password = form.password.value
        const name = form.name.value
        const url = form.url.value
        // console.log(name, url)
        register(email, password)
            .catch(error => setError('Insert more than 6 character'))

        updateUser(name, url, email)
        // .catch(alert => alert(alert.message))

    }

    return (
        <Container>
            <h3 className='text-center mt-4 fw-bold'>Please Register</h3>
            <Form className='w-50 mx-auto my-5' onSubmit={handleRegistration}>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" maxLength={40} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <small className='text-danger'>{error} </small>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Enter your photo Url" />
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