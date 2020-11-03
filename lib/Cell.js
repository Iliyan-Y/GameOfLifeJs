class Cell {
  constructor() {
    this.alive = true;
  }

  die() {
    this.alive = false;
  }
}

module.exports = Cell;
