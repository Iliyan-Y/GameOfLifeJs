const Cell = require('./Cell');

class Game {
  constructor() {
    this.population = [];
  }

  createGeneration(generation) {
    this.population.push(generation);
  }
}

module.exports = Game;
