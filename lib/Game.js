const Cell = require('./Cell');

class Game {
  constructor() {
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

      if (cell.alive && this._countLiveNeighbors(count) < 2) cell.die();

      count++;
    });
  }

  _countLiveNeighbors(currentCellNumber) {
    let rightLifeNeighbours = 0;
    let leftLifeNeigbours = 0;

    if (this._nextCell(currentCellNumber)) rightLifeNeighbours++;

    if (this._nextCell(currentCellNumber, 2)) rightLifeNeighbours++;

    if (this._prevCell(currentCellNumber)) leftLifeNeigbours++;

    if (this._prevCell(currentCellNumber, 2)) leftLifeNeigbours++;

    return rightLifeNeighbours + leftLifeNeigbours;
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
