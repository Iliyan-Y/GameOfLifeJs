const Cell = require('./Cell');

class Game {
  constructor(cell = Cell) {
    this.cell = cell;
    this.population = [];
  }

  addPopulation(generation) {
    generation.map((cell) => this.population.push(cell));
  }

  verifyPopulation() {
    let count = 0;
    let totalPopulation = this.population.length;
    this.population.map((cell) => {
      if (totalPopulation < 2) cell.die();

      this._updateCellStatus(count, cell);
      count++;
    });
  }

  _updateCellStatus(count, cell) {
    if (cell.alive && this._countLiveNeighbors(count) < 2) cell.die();

    if (cell.alive && this._countLiveNeighbors(count) > 3) cell.die();

    if (!cell.alive && this._countLiveNeighbors(count) == 3) cell.resurrect();
  }

  _countLiveNeighbors(currentCellNumber) {
    let rightLifeNeighbours = this._rightLifeNeighbours(currentCellNumber);
    let leftLifeNeigbours = this._leftLifeNeighbours(currentCellNumber);
    return rightLifeNeighbours + leftLifeNeigbours;
  }

  _leftLifeNeighbours(currentCellNumber) {
    let count = 0;
    if (this._prevCell(currentCellNumber)) count++;

    if (this._prevCell(currentCellNumber, 2)) count++;

    if (this._prevCell(currentCellNumber, 3)) count++;
    return count;
  }

  _rightLifeNeighbours(currentCellNumber) {
    let count = 0;

    if (this._nextCell(currentCellNumber)) count++;

    if (this._nextCell(currentCellNumber, 2)) count++;

    if (this._nextCell(currentCellNumber, 3)) count++;

    return count;
  }

  _nextCell(count, skip = 1) {
    if (this.population[count + skip])
      return this.population[count + skip].alive;
  }
  _prevCell(count, skip = 1) {
    if (this.population[count - skip])
      return this.population[count - skip].alive;
  }
}

module.exports = Game;
