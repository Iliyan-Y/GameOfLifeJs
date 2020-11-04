class Cell {
  constructor(status = true) {
    this.alive = status;
  }

  die() {
    this.alive = false;
  }

  resurrect() {
    this.alive = true;
  }
}

module.exports = Cell;
