import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
<div>
<div className="footer py-5 bg-gray-200  flex justify-around max-h-36">
      <div>
        <Link to='/' className=" text-xl text-black font-bold hover:text-gray-600 ">The EPL Hub</Link>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/terms&conditions" className="link link-hover">Terms</Link>
        <Link to='/privcayPolicy' className="link link-hover">Privacy</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a href='https://web.facebook.com/?_rdc=1&_rdr#' className="link link-hover">Facebook</a>
        <a href="https://x.com/" className="link link-hover">Twitter</a>

      </div>




    </div>
    <p className="bg-gray-400 text-center  p-2">© {new Date().getFullYear()} All rights reserved.</p>
</div>
  );
};

export default Footer;