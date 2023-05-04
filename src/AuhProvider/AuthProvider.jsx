import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // to register New account and add the name and photo url
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, url, email) => {
        updateProfile(auth.currentUser, {
            displayName: name || email, photoURL: url
        })
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
    //client id 620bb118a9e139e60d2f
    //secret c013d8d5408aa7010d77811b3fb9964425c7f07b

    const gitProvider = new GithubAuthProvider();
    const loginWithGithub = () => {
        return signInWithPopup(auth, gitProvider)
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
        updateUser,
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