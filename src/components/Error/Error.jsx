import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="text-center mt-20">
        <h1 className="text-5xl font-bold ">404</h1>
        <p>Page not found</p>
        <Link to="/" className="btn btn-primary mt-10">Go Home</Link>
      </div>
    );
};

export default Error;