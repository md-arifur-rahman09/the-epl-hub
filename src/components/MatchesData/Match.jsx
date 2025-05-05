import React from 'react';
import { Link } from 'react-router';

const Match = ({match}) => {
    const {thumbnail, name, category, date, location, entry_fee,id } = match;
    
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4  mx-auto card  " >
      <img
        src={thumbnail}
        alt={name}
        className=" h-[250px] w-[350px]  rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">Category: {category}</p>
      <p className="text-sm text-gray-600 mb-1">Date: {date}</p>
      <p className="text-sm text-gray-600 mb-1">Location: {location}</p>
      <p className="text-sm text-gray-800 font-semibold mb-3">
        Entry Fee: {entry_fee}
      </p>
      <Link to={`/matchDetails/${id}`}  className=" btn btn-primary px-4 py-2 rounded-md hover:bg-blue-700">
        View More
      </Link>
    </div>
    );
};

export default Match;