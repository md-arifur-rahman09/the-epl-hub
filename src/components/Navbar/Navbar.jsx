import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const navigate=useNavigate();

  const { user, userSignOut } = use(AuthContext);


  const handleLogout = () => {
    userSignOut()
      .then(() => {
        alert("successfully signOut");
        navigate('/auth/login')
      })
      .catch(error => alert(error.code, error.message))
  }


  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/profile'>Profile</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold ">The EPL Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ?
          <><div className='flex bg-gray-200  rounded-lg mx-2' >
             <img className='w-12 h-9 my-auto mx-1 rounded-md ' src={user.photoURL} alt="" />
             <p className=' p-2'>{user.email}</p>
          </div>
            <Link onClick={handleLogout} className='btn btn-error'> Logout</Link>
          </>
          : <><Link className='btn btn-primary' to='/auth/login'>Login</Link>  <a className="btn" href='/auth/register'>Register</a></>}

       
      </div>
    </div>
  );
};

export default Navbar;