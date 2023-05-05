import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { authContext } from '../../AuhProvider/AuthProvider';


const LoginPage = () => {

    const { login, loginWithGoogle, loginWithGithub } = useContext(authContext)
    const [error, setError] = useState('')

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target
        const email = form.email.value;
        const password = form.password.value

        login(email, password)
            .catch(error => setError(error.message))
        form.reset()

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .catch(error => alert(error.message))


    }

    const handleGithubLogin = () => {
        loginWithGithub()
            .catch(error => alert(error.message, 'login with different account'))
    }

    return (
        <Container>
            <h3 className='text-center mt-4 fw-bold'>Please login</h3>
            <Form className='w-50 mx-auto my-5' onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />

                </Form.Group>
                <small className='text-danger'>{error}</small>
                <br />
                <Button variant="success" type="submit" className='fw-bold'>
                    Login
                </Button>
                <Form.Group className="mb-3" >
                    <Form.Text className="text-muted">
                        Do not have an account? {<Link to='/account/register'>Register</Link>}
                    </Form.Text>
                </Form.Group>
                <div className='d-flex justify-content-start'>
                    <Button variant="outline-primary" className='fw-bold' onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Sign in with Google</Button>
                    <Button variant="outline-dark" className='ms-4 fw-bold' onClick={handleGithubLogin}><FaGithub></FaGithub> Sign in with GitHub</Button>
                </div>

            </Form>
        </Container>
    );
};

export default LoginPage;