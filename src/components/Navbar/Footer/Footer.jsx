import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="footer p-10 bg-gray-300 ">
        <div>
          <span className="footer-title text-xl font-bold ">The EPL Hub</span>
          <Link to="/terms" className="link link-hover">Terms</Link>
          <Link to="/privacy" className="link link-hover">Privacy</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a href='https://web.facebook.com/?_rdc=1&_rdr#' className="link link-hover">Facebook</a>
          <a href="https://x.com/" className="link link-hover">Twitter</a>
        </div>
      </div>
    );
};

export default Footer;