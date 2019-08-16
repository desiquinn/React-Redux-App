import React from 'react';

import House from './components/House.js';
import SortingHat from './components/SortingHat.js';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <House />
      <SortingHat />
    </div>
  );
}

export default App;
