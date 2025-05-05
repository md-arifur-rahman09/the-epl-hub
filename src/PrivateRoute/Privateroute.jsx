import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
    const location=useLocation();
    

    const {user,loading}=use(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(!user){
       return <Navigate state={location?.pathname} to='/auth/login'> </Navigate>
    }
    return children;
};

export default Privateroute;