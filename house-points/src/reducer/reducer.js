import { FETCH_HOUSES_START, 
    FETCH_HOUSES_SUCCESS, 
    FETCH_HOUSES_FAILURE,
    FETCH_SORT_START, 
    FETCH_SORT_SUCCESS, 
    FETCH_SORT_FAILURE,  
 } from '../actions/actions.js';

const initialState = {
    houses: null, 
    sort: null,
    points: 0,
    error: "", 
    loading: false,
}

const reducer = (state=initialState, action) => {
    console.log("ACTION:", action)

    switch(action.type) {
        case FETCH_HOUSES_START:
            return {
                ...state, 
                error: "",
                loading: true,
            }
        case FETCH_HOUSES_SUCCESS:
            return {
                ...state, 
                error: "",
                loading: false,
                houses: action.payload
            }
        case FETCH_HOUSES_FAILURE:
            return {
                ...state, 
                error: "",
                loading: false,
                houses: action.payload
            }
        case FETCH_SORT_START:
            return {
                ...state, 
                error: "",
                loading: true,
            }
        case FETCH_SORT_SUCCESS:
            return {
                ...state,
                error: "",
                loading: false,
                sort: action.payload
            }
        case FETCH_SORT_FAILURE:
            return {
                ...state, 
                error: "",
                loading: false,
                sort: action.payload
            }
        case "ADD_POINTS":
            return {
                ...state, 
                points: 0,
            }
        case "REMOVE_POINTS":
            return {
                ...state,
                points: 0, 
            }
        case "SORT_HOUSE":
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state
    };

};

export default reducer;