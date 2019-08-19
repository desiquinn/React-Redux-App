import axios from 'axios';


export const FETCH_HOUSES_START= 'FETCH_HOUSES_START';
export const FETCH_HOUSES_SUCCESS= 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAILURE= 'FETCH_HOUSES_FAILURE';



export const FETCH_SORT_START= 'FETCH_SORT_START';
export const FETCH_SORT_SUCCESS= 'FETCH_SORT_SUCCESS';
export const FETCH_SORT_FAILURE= 'FETCH_SORT_FAILURE';

// api key $2a$10$Fjh6u1yHIYlaPO8gprfFuuQ5ImieioyxBm7MlpoXQ/yJK1TjQf7HG
// get request url https://www.potterapi.com/v1/
// sorting hat /sortingHat houses /houses

export const getHouses = () => {
    return dispatch => {
        dispatch({type: FETCH_HOUSES_START });
        axios.get("https://www.potterapi.com/v1/houses?key=$2a$10$Fjh6u1yHIYlaPO8gprfFuuQ5ImieioyxBm7MlpoXQ/yJK1TjQf7HG")
            .then(res => {
                console.log("House GET Response:", res);
                dispatch({type: FETCH_HOUSES_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log("House GET Error:", err);
                dispatch({type: FETCH_HOUSES_FAILURE, payload: err.response});
            })
    };
};

export const getSortingHat = () => {
    return dispatch => {
        dispatch({type: FETCH_SORT_START });
        axios.get("https://www.potterapi.com/v1/sortingHat")
            .then(res => {
                console.log("SORT GET Response:", res);
                dispatch({type: FETCH_SORT_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log("SORT GET Response:", err);
                dispatch({type: FETCH_SORT_FAILURE, payload: err.response});
            })
    };
};

export const addPoints = house => {
    return {
        type: 'ADD_POINTS',
    };
};

export const removePoints = house => {
    return {
        type: 'REMOVE_POINTS',
    };
};

export const sortHouse = house => {
    return{
        type: 'SORT_HOUSE',
    };
};