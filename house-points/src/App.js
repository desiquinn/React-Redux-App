import React from 'react';
import { connect } from 'react-redux';
import { addPoints, removePoints, sortHouse } from './actions/actions.js'

import House from './components/House.js';
import SortingHat from './components/SortingHat.js';

import './App.css';

function App(props) {

  console.log('App props:', props);
  const {state} = props;
  console.log('State', state);

  return (
    <div className="App">
      <House />
      <SortingHat />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    state,
  };
};

export default connect(mapStateToProps, {addPoints, removePoints, sortHouse}) (App);
