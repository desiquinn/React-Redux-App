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