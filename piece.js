class Piece {
  constructor(shape, ctx) {
    this.shape = shape;
    this.ctx = ctx;
    this.y = 0; // piece will start at the top
    this.x = Math.floor(COLS / 2); // piece will be in the middle of the screen
  }
  
  // render the piece
  renderPiece() {
    this.shape.map((row, i) => {
      row.map((cell, j) => {
        if (cell > 0) {
          this.ctx.fillStyle = COLORS[cell];
          this.ctx.fillRect(this.x + j, this.y + i, 1, 1);
        }
      });
    });
  }
}