const Cell = require('./Cell');

class Game {
  constructor() {
    this.population = [];
  }

  createGeneration(generation) {
    this.population.push(generation);
  }

  verifyGeneration() {
    let status = this.population.map((gen) => {
      if (gen.length < 2) {
        return false;
      }
    });

    return status;
  }
}

module.exports = Game;
