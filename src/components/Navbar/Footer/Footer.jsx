import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
<div>
<div className="footer p-10 bg-gray-300  flex justify-around">
      <div>
        <span className=" text-xl text-black font-bold ">The EPL Hub</span>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/terms" className="link link-hover">Terms</Link>
        <Link to="/privacy" className="link link-hover">Privacy</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <a href='https://web.facebook.com/?_rdc=1&_rdr#' className="link link-hover">Facebook</a>
        <a href="https://x.com/" className="link link-hover">Twitter</a>

      </div>




    </div>
    <p className="bg-gray-400 text-center p-3">© {new Date().getFullYear()} All rights reserved.</p>
</div>
  );
};

export default Footer;