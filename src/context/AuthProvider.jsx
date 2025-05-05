import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
// sign Up 
    const createUser=(email,password)=> {
        return createUserWithEmailAndPassword(auth, email , password )
    }

    // sign in 

  const  signInUser= (email, password)=> {
    return signInWithEmailAndPassword(auth, email , password)
  }
const userInfo={
    createUser,
    signInUser

}
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
       
};

export default AuthProvider;