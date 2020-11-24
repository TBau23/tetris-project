import React from 'react';
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

import GridSquare from './GridSquare';

// Draws the next block view, showing the next block that will drop

function NextBlock(props) {
    const nextShape = useSelector((state) => state.game.nextShape)
    const box = shapes[nextShape][0]
    // Map to grid
    const grid = box.map((rowArr, row) => {
        return rowArr.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    }) // this nested map allows us to track each individual square from the nested array 

    return (
        <div className='next-block'>
            {grid}
        </div>
    )
}

export default NextBlock