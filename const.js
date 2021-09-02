const BLOCK_SIDE_LENGTH = 30;
const SCORE_WORTH = 15;
const ROWS = 20;
const COLS = 10; 
const GAME_CLOCK = 1000; // blocks will fall every second (1000 milliseconds)

// creating the different shapes. the zeros will have no color, the ones will have color.
const SHAPES = [
  [],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],

  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0],
  ],

  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0],
  ],
  [
    [4, 4],
    [4, 4],
  ],
  [
    [0, 5, 5],
    [5, 5, 0],
    [0, 0, 0],
  ],
  [
    [0, 6, 0],
    [6, 6, 6],
    [0, 0, 0],
  ],
  [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0]
  ],
];

// colors for the shapes
const COLORS = [
  "#000000", // black will be the color of the zeros
  "#FF0000", // red
  "#FF8000", // orange
  "#00FF00", // green
  "#FFFF00", // yellow
  "#FF00FF", // pink
  "#7F00FF", // purple
  "#0000FF", // blue
];
