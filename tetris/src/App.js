import React from 'react';
import './App.css';

import GridSquare from './components/GridSquare';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Tetris</h2>
      </header>
      <GridSquare color="1" />
      
    </div>
  );
}

export default App;
