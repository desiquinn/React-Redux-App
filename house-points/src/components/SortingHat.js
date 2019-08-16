import React from 'react';

const SortingHat = props => {

    return (
        <div>
            <h1>Welcome To The Sorting Ceremony</h1>
            <p>Click the button to be sorting into a hogwarts house!</p>
            <h2>{props}</h2>
            <button>Find a House</button>
        </div>
    )
};

export default SortingHat;