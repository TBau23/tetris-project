import React from 'react';
import './App.css';

import GridSquare from './components/GridSquare';
import GridBoard from './components/GridBoard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Tetris</h2>
      </header>
      <GridBoard />
      
    </div>
  );
}

export default App;
