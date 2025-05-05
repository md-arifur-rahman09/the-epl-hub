import React, { use } from 'react';
import Match from './Match';
const matchesPromise = fetch('/data.json').then(result => result.json());
const Matches = () => {
    const matches = use(matchesPromise);
    // console.log(matches)
    return (
        <div>
            <h1 className='text-center font-bold text-6xl my-16'>Upcoming Match Preview</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {matches.map(match => <Match key={match.id} match={match}></Match>)}
        </div>
        </div>
    );
};

export default Matches;