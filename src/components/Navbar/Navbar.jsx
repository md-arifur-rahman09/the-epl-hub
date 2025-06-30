import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, userSignOut } = useContext(AuthContext);

  const handleLogout = () => {
    userSignOut()
      .then(() => navigate('/auth/login'))
      .catch((error) => alert(`${error.code}: ${error.message}`));
  };

  const links = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-primary font-semibold' : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            isActive ? 'text-primary font-semibold' : undefined
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl font-extrabold" to='/'>
          The EPL Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {links} </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL}
                alt="User Avatar"
                title={user.displayName }
              />
            
            </div>
            <button
              onClick={handleLogout}
              className='btn btn-error ml-3'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className='btn btn-primary' to='/auth/login'>
              Login
            </Link>
            <Link className='btn btn-outline ml-2' to='/auth/register'>
              <FaUser size={20} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
