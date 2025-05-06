import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("")


  const { signInUser, signInWithGoogle, forgetPassword } = useContext(AuthContext);
  // console.log(signInUser)

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Congratulation!",
          text: "You are successfully Login!",
          icon: "success"
        });
        navigate(location?.state || '/')
      })
      .catch((error) => { setError(error.message) })

  }
  // forget password

  const handleForgetPassword = () => {

    const email = emailRef.current.value;
    // console.log(email)


    //  reset password / forget password
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "An email has been sent to your email address. Please check your inbox to proceed.",
          showConfirmButton: false,
          timer: 1500
        });
       })
      .catch(error => { setError(error.message) })
  };

  // sign in with google
  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {

        navigate('/')
      })
      .catch((error) => {
        setError(error.message)
      })
  }



  return (





    <div className="card bg-base-100 w-full max-w-sm mt-10 mx-auto shrink-0 shadow-2xl">

      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body">

        <form onSubmit={handleSubmit} className="fieldset">

          <label className="label">Email</label>
          <input type="email" name='email' ref={emailRef} className="input"
            placeholder="Email" required />

          <label className="label">Password</label>
          <div className=' relative'>
            <input
              type={show ? "text" : "password"}
              name='password'
              className="input"
              placeholder="Password"
            />
            <button onClick={() => setShow(!show)} className='btn btn-xs  absolute z-10 top-2 right-6'>{show ? <EyeOff className='w-4'></EyeOff> : <Eye className='w-4'></Eye>}</button>
            {error && <p className='text-red-400 mt-3'> {error}</p>}

          </div>

          <div onClick={handleForgetPassword}><Link to='/auth/login' className="link link-hover">Forgot password?</Link></div>
          <button className="btn btn-neutral mt-4">Login</button>

        </form>

        {/* Google */}
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        <p className='mt-4'>Don't have an account. Please  <Link className='text-blue-400 underline' to='/auth/register'>Register</Link></p>
      </div>

    </div>

  );
};

export default Login;