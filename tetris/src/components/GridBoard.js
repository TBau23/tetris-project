import React from 'react';
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

import GridSquare from './GridSquare.js'

function GridBoard(props) {
    const game = useSelector((state) => state.game)
    const { grid, shape, rotation, x, y, isRunning, speed} = game
    // generates an array of 18 rows, each containing 10 GridSquares
    // grid will be 10 x 18

    const block = shapes[shape][rotation]
    const blockColor = shape
    // map rows
    const gridSquares = grid.map((rowArray, row) => {
        // map columns
        return rowArray.map((square, col) => {
            // Find block x and y on the shape grid
            // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array
            // as if it was superimposed on the main grid
            const blockX = col - x
            const blockY = row - y
            let color = square
            // Map current falling blocks to grid
            // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case
            // we use the block color
            if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                color = block[blockY][blockX] === 0 ? color : blockColor
            }
            // generate a unique key for every block
            const k = row * grid[0].length + col;
            // generate a grid square
            return <GridSquare key={k} color={color} />
        })
    })

    return (
        <div className='grid-board'> 
            {gridSquares}
        </div>
    )

    
    };

    



export default GridBoard