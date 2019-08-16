import React from 'react';

const HouseForm = props => {

    return(
        <form>
            <input 
                type='text'
                name='points'
                value={points}
                onChange={handleChange}
            />
            <button>Add Points</button>
            <button>Remove Points</button>
        </form>
    )
};

export default HouseForm;

