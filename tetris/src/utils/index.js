export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const gridDefault = () => {
    const rows = 18
    const cols = 10
    const array = []

    for(let row = 0; row < rows; row++){
        array.push([])
        for(let col = 0; col < cols; col++) {
            array[row].push(0)
        }
    }
}

export const shapes = [
    // none
    [
        [[0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 0, 0]]
    ],
    // 1 x 4 block
    [
        [[0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],

        [[0, 1, 0, 0],
         [0, 1, 0, 0],
         [0, 1, 0, 0],
         [0, 1, 0, 0]]
    ],
    // T block
    [
        [[0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]],

        [[0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]],

        [[0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],

        [[0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]]
    ],
        // L
    [
        [[0,0,0,0],
        [1,1,1,0],
        [1,0,0,0],
        [0,0,0,0]],

        [[1,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]],

        [[0,0,1,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]],

        [[0,1,0,0],
        [0,1,0,0],
        [0,1,1,0],
        [0,0,0,0]]
    ],

    // J block
    [
        [[1,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]],

        [[0,1,1,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]],

        [[0,0,0,0],
        [1,1,1,0],
        [0,0,1,0],
        [0,0,0,0]],

        [[0,1,0,0],
        [0,1,0,0],
        [1,1,0,0],
        [0,0,0,0]]
    ],
    // Z block
    [
        [[0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]],

        [[0,0,1,0],
        [0,1,1,0],
        [0,1,0,0],
        [0,0,0,0]]
    ],

    //S block
    [
        [[0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]],

        [[0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]]
    ],

    // 2 x 2
    [
        [[0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]]
    ]

]

// Random Shape Selector
export const randomShape = () => {
    return random(1, shapes.length - 1) // start with 1 because 0 index shape is blank
}

// Return default state for game
export const defaultState = () => {
    return {
        // create empty grid
        grid: gridDefault(),
        // get a new random shape
        shape: randomShape(),
        // set rotation of that shape to 0
        rotation: 0, // index within shapes array
        // set x position of shape to 5 and y to -4, which puts the shape in center of grid, above the top
        x: 5,
        y: -4,
        nextShape: randomShape(),
        // tell the game that it's currently running
        isRunning: true,
        // set score to 0
        score: 0,
        // set the default speed
        speed: 1000,
        // game isn't over yet
        gameOver: false


    }
}
