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
    if (this.population.length < 2) {
      return false;
    }
  }
}

module.exports = Game;
