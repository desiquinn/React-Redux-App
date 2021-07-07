import React from 'react';
import HouseForm from './HouseForm.js';

const House = props => {

    const housePhoto = () => {
        if (gryfindor) {
            return 'this image'
        } else if (slytherin) {
            return 'this image'
        } else if (ravenclaw) {
            return 'this image'
        } else {
            return 'this image'
        }
    }

    return (
        <div>
            <img src={housePhoto()}/>
            <h2>{props}</h2>
            <div>
                <h3>House Master</h3>
                <p>{props}</p>
            </div>
            <div> 
                <p>Points:{props}</p>
                <HouseForm />
            </div>
        </div>
    )
}

export default House