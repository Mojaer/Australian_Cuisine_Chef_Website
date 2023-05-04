import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // to register New account
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // to login and logout from the account

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);

    }

    // to sign in with google account
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    //github login with github account
    //client id 7decc7066d962addaf44
    //secret cbc1376ec45a2c7934a07c9114f59b8ec68611de

    const gitProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        return signInWithPopup(auth, provider)
    }


    // to state management by the firebase

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser, 'log');
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])


    const useInfo = {
        user, loading,
        register,
        login,
        loginWithGoogle,
        loginWithGithub,
        logOut
    }




    return (
        <authContext.Provider value={useInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;