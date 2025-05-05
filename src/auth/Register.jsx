import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { Eye } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const { createUser, userUpdate, signInWithGoogle } = use(AuthContext);



  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        const updateInfo = {
          displayName: name,
          photoURL: photo
        }
        userUpdate(updateInfo)
          .then(() => { })
          .catch(error => console.log(error.message))

        navigate('/')
      })
      .catch(error => {
        console.log(error.message)
      })



  }
  //direct google login 
  const handleGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate('/')
      })
      .catch(error => {
        console.log(error.code, error.message)
      })
  }
  return (


    <div className="card bg-base-100 w-full max-w-sm mt-10 mx-auto shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Please Register</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset space-y-1">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">PhotoURL</label>
          <input type="text" name='photo' className="input" placeholder="PhotoURL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label"> Password </label>
         <div className='flex relative ' >
         <input type="password" name='password' className="input" placeholder="Password" /> 
         <Eye  className=' absolute top-2 left-72   '></Eye> 
         </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>
        <button onClick={handleGoogle} className="btn bg-gray-200 text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <p className='my-2'>Already have an accout. Please <Link className='text-blue-400 underline' to='/auth/login'>Login</Link></p>
      </div>

    </div>
  );
};

export default Register;