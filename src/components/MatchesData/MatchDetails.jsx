import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const MatchDetails = () => {
  const [bookedTicket, setBookedTicket] = useState(null);
  const { id } = useParams();
  const datas = useLoaderData();
  const filteredData = datas.find(data => data.id == id);

  const handleBookTickets = () => {

    setBookedTicket(filteredData.id);
  };


  const { thumbnail, name, category, date, location, entry_fee, match_time, stadium, capacity, weather, rating, sponsors, } = filteredData;

  return (
    <div className='lg:grid grid-cols-12 w-11/12 mx-auto '>
      <div className="bg-white mx-auto shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 col-span-9">
        <img
          src={thumbnail}
          alt={name}
          className="max-w-[900px] mx-auto max-h-[600px] object-cover"
        />
        <div className="p-5 space-y-2">
          <div className="text-sm text-gray-700 max-w-[800px] mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 my-5">{name}</h2>
            <p className="text-xl font-medium text-gray-600">{category}</p>

            <p><span className="font-semibold">Date:</span> {date}</p>
            <p><span className="font-semibold">Time:</span> {match_time}</p>
            <p><span className="font-semibold">Stadium:</span> {stadium} ({capacity} seats)</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Entry Fee:</span> {entry_fee}</p>
            <p><span className="font-semibold">Weather:</span> {weather}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {rating}</p>
            <p><span className="font-semibold">Sponsors:</span> {sponsors.join(", ")}</p>



            <button
              onClick={handleBookTickets}
              disabled={bookedTicket}
              className={`inline-block mt-3 px-4 py-2 text-white rounded-lg text-sm font-semibold transition ${bookedTicket ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {bookedTicket ? 'Booked' : 'Book Tickets'}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className='col-span-3 bg-gray-100 sticky h-fit top-2 '>
        <h3 className="text-3xl font-bold mb-3 py-5 text-center bg-gray-300">Booking Info</h3>
        {bookedTicket ? (
          <p className="text-green-600 mx-5">
            Ticket for <strong>{name}</strong> has been successfully booked.
          </p>
        ) : (
          <p className="text-red-600"> No ticket has been booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;