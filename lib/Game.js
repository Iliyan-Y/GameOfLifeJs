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

      if ((cell.alive && !this._nextCell(count)) || !this._prevCell(count))
        cell.die();
    });
  }

  _countLiveNeighbors(currentCellNumber) {
    let leftLifeNeigbours = 0;
    let rightLifeNeighbours = 0;

    this.population.map(c);
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
