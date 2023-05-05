import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext)
    if (loading) {
        <div className='text-center'>
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden mx-auto">Loading...</span>
            </Spinner>
        </div>
    }

    else if (user) {
        return (
            <>
                {children}
            </>
        );

    }
    else {
        return (
            <>
                <Navigate to='/account/login'></Navigate>
            </>
        )
    }

};

export default PrivateRoute;