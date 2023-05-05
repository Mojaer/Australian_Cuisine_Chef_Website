import React, { useContext, useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuhProvider/AuthProvider';

const RegistrationPage = () => {

    const { register, user, updateUser } = useContext(authContext)
    const [error, setError] = useState('')

    if (!user) {
        <div className='text-center'>
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden mx-auto">Loading...</span>
            </Spinner>
        </div>
    }
    // console.log(null)

    const handleRegistration = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target
        const email = form.email.value;
        const password = form.password.value
        const name = form.name.value
        const url = form.url.value
        // console.log(name, url)

        if (password.length < 6) {
            setError('insert more than 6 characters')
        }

        else {
            register(email, password, name, url)
                .then(() => updateUser(name, url, email))
                .catch(error => setError(error.message))

            // .catch(alert => alert(alert.message))
            form.reset()
        }
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
                <br />
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