import React from 'react';

const SortingHat = props => {
    console.log(props)
    const { sortHouse, getSortingHat }=props
    return (
        <div>
            <h1>Welcome To The Sorting Ceremony</h1>
            <p>Click the button to be sorted into a hogwarts house!</p>
            <h2>{sortHouse}</h2>
            <button onClick={() => getSortingHat()}>Find a House</button>
        </div>
    )
};

export default SortingHat;