import React from 'react';

// Represents a grid square with color

function GridSquare(props) {
    const classes = `grid-square color-${props.color}` // props.color will be a number linked to diff square colors
    // will determine style on the className div

    return (
        <div className={classes}>

        </div>
    )
}

export default GridSquare
