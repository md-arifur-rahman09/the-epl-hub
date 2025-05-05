import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const {signInUser}=use(AuthContext);
  // console.log(signInUser)

  const handleSubmit = e=> {
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    
    signInUser(email,password)
    .then(result=> console.log(result.user))
    .catch(error=> {console.log(error.message)})
  }

  
    return (
       
         
            
            
        
          <div className="card bg-base-100 w-full max-w-sm mt-10 mx-auto shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email'  className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
      
    );
};

export default Login;