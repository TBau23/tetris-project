import React from 'react';
import GridSquare from './GridSquare.js'

function GridBoard(props) {

    // generates an array of 18 rows, each containing 10 GridSquares
    // grid will be 10 x 18

    const grid = []
    for(let row = 0; row < 18; row++) {
        grid.push([])
        for(let col = 0; col < 10; col++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color ="0" />)
        }
    }

    return (
        <div className='grid-board'> 
            {grid}
        </div>
    )

};

export default GridBoard