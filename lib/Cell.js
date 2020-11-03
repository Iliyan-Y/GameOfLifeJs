class Cell {
  constructor() {
    this.alive = true;
  }

  die() {
    this.alive = false;
  }

  resurrect() {
    this.alive = true;
  }
}

module.exports = Cell;
