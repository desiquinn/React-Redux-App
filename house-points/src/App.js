import React from 'react';
import { connect } from 'react-redux';
import { getHouses, getSortingHat, addPoints, removePoints, sortHouse } from './actions/actions.js'

// import House from './components/House.js';
// import SortingHat from './components/SortingHat.js';

import './App.css';

function App(props) {

  console.log('App props:', props);

  return (
    <div className="App">
      {/* <House />
      <SortingHat /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    houses: state.houses,
    sort: state.sort, 
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {getHouses, getSortingHat, addPoints, removePoints, sortHouse}) (App);
