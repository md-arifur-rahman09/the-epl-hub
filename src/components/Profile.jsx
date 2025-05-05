import React, { use} from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router'; 

const Profile = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return (
      <p className='text-center mt-10'>
         Sorry, you are not logged in. Please{" "}
        <Link className='text-blue-500 underline' to='/auth/login'>Login</Link>
      </p>
    );
  }

  const { displayName, email, photoURL, metadata, uid } = user;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <img
        src={photoURL}
        alt={displayName}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold text-gray-800">{displayName}</h2>
      <p className="text-gray-600">{email}</p>
      <br />
      <p className="text-sm">
        <span className="font-semibold">User ID:</span> {uid}
      </p>
      <div className="mt-4 text-sm text-gray-500">
        <p><strong>Account Created:</strong> {metadata?.creationTime}</p>
        <p><strong>Last Login:</strong> {metadata?.lastSignInTime}</p>
      </div>
    </div>
  );
};

export default Profile