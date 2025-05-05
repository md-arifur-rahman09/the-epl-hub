import React, { useState, use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router'; 
import { Eye, EyeIcon, EyeOff } from 'lucide-react'; 
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const { createUser, userUpdate, signInWithGoogle } = use(AuthContext); 
//  setErrorMessage("");

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegEx.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return;
    }

//  create user with email & password
    createUser(email, password)
      .then(() => {
        const updateInfo = {
          displayName: name,
          photoURL: photo
        };
        userUpdate(updateInfo)
          .then(() => {
            alert("Your are successfully Registered!")
          
           })
          .catch(error => console.log(error.message));

        navigate('/');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  // sign in with google

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mt-10 mx-auto shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Please Register</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset space-y-1">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" required />

          <label className="label">PhotoURL</label>
          <input type="text" name='photo' className="input" placeholder="PhotoURL" required />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />

          <label className="label">Password</label>
          <div className='relative'>
            <input
              type={showPassword ?"text" :'password'}
              name='password'
              className="input w-full"
              placeholder="Password"
              required
            />
            <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute top-2 right-6 z-10  '> {showPassword ?<EyeOff className='w-4'></EyeOff> : <EyeIcon className='w-4'></EyeIcon>}</button>
          </div>

          {errorMessage && <p className="text-red-400 text-xs mt-1">{errorMessage}</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Sign up</button>
        </form>

        <button onClick={handleGoogle} className="btn bg-gray-200 text-black border-[#e5e5e5] mt-2">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <p className='my-2'>Already have an account? Please <Link className='text-blue-400 underline' to='/auth/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
