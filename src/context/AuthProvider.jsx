import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // sign Up 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email & password

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // signout 
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // update Profile 
    const userUpdate = (updateInfo) => {

        return updateProfile(auth.currentUser, updateInfo)
    }
    // forget password 
    const forgetPassword=(email)=> {
        return sendPasswordResetEmail(auth,email);
    }
    // observer 
    useEffect(() => {
        const unssubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unssubscribe();

        }
    }, [])

    const userInfo = {
        createUser,
        signInUser,
        signInWithGoogle,
        user,
        userSignOut,
        userUpdate, loading,
       forgetPassword

    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>

};

export default AuthProvider;