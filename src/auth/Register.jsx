import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {

    const {createUser}=use(AuthContext);


    const handleSubmit=e => {
        e.preventDefault();

        // const name= e.target.name.value;
        // const photo= e.target.photo.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        createUser( email,password)
        .then(result=> {
          console.log(result.user)
        })
        .catch(error=> {
          console.log(error.message)
        })
     
    }

    return (
               
        
        <div className="card bg-base-100 w-full max-w-sm mt-10 mx-auto shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">Please Register</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset space-y-1">
            <label className="label">Name</label>
            <input type="text" name='name'  className="input" placeholder="Name" />
            <label className="label">PhotoURL</label>
            <input type="text" name='photo'  className="input" placeholder="PhotoURL" />
            <label className="label">Email</label>
            <input type="email" name='email'  className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Sign up</button>
          </form>
        </div>
      </div>
    );
};

export default Register;