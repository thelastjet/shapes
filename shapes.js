let canvas = document.getElementById("game-canvas");
let scoreboard = document.getElementById("scoreboard");
let ctx = canvas.getContext("2d");
ctx.scale(BLOCK_SIDE_LENGTH, BLOCK_SIDE_LENGTH);
let model = new GameModel(ctx);
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", start);

let score = 0;

let newGameState = () => {
  fullSend();
  if (model.fallingPiece === null) {
    const rand = Math.round(Math.random() * 6) + 1;
    const newPiece = new Piece(SHAPES[rand], ctx);
    model.fallingPiece = newPiece;
    model.moveDown();
  } else {
    model.moveDown();
  }
}

function start() {
  btn2.textContent = "Reset Game";
  btn2.removeEventListener("click", start);
  btn2.addEventListener("click", reset);
  setInterval(() => {
    newGameState();
  }, GAME_CLOCK);
}

function reset() {
  btn2.textContent = "Start Game";
  btn2.removeEventListener("click", reset);
  btn2.addEventListener("click", start);
  window.location.reload();
}

const fullSend = () => {
  const allFilled = (row) => {
    for (let x of row) {
      if (x === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < model.grid.length; i++) {
    if (allFilled(model.grid[i])) {
      score += SCORE_WORTH;
      model.grid.splice(i, 1);
      model.grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }

  scoreboard.innerHTML = "Score: " + String(score);
  if (score >= 600) {
    var parent = document.getElementById("scoreboard");
    var winner = document.createElement("h1");
    winner.innerHTML = "You Win, Great Job!";
    parent.appendChild(winner);
    if (winner) {
      fallingPiece.stop;
    } 
  }
}


// setting up which keys can be used to move and rotate the shapes
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  switch (e.key) {
    //space key or the up arrow will rotate the shapes
    case " "  :
      model.rotate();
      break;
    case "ArrowUp":
      model.rotate();
      break;
    case "ArrowRight":
      model.move(true);
      break;
    case "ArrowDown":
      model.moveDown();
      break;
    case "ArrowLeft":
      model.move(false);
      break;
  }
});
