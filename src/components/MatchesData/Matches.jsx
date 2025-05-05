import React, { use } from 'react';
const matchesPromise = fetch('/data.json').then(result => result.json());
const Matches = () => {
    const matches = use(matchesPromise);
    console.log(matches)
    return (
        <div>
            {matches.map(match => <div key={match.id}><p>{match.stadium}</p> <img src={match.image} alt="" /></div>)}
        </div>
    );
};

export default Matches;