import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider();
// sign Up 
    const createUser=(email,password)=> {
        return createUserWithEmailAndPassword(auth, email , password )
    }

    // sign in with email & password

  const  signInUser= (email, password)=> {
    return signInWithEmailAndPassword(auth, email , password)
  }
    // sign in with google 
    const signInWithGoogle= ()=> {
        return signInWithPopup(auth,googleProvider)
    }
    // signout 
    const userSignOut=()=> {
        return signOut(auth)
    }
    // observer 
    useEffect(()=> {
        const unssubscribe= onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
        });
        return ()=> {
            unssubscribe();
            
        }
    },[])
    
const userInfo={
    createUser,
    signInUser,
    signInWithGoogle,user,
    userSignOut

}

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
       
};

export default AuthProvider;