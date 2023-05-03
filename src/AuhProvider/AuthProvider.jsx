import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const user = { name: 'nobody' }

    const useInfo = {
        user,
    }
    return (
        <authContext.Provider value={useInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;