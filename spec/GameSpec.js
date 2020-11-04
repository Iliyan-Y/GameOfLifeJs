describe('Game', () => {
  var Game = require('../lib/Game');
  let game;

  beforeEach(function () {
    game = new Game();
  });

  describe('addPopulation', () => {
    it("create's a new generation of cells", () => {
      game.addPopulation([{ alive: false }]);
      expect(game.population[0].alive).toEqual(false);
    });
  });

  describe('verifyPopulation', () => {
    it('Checks if the current generation with one cell is dead', () => {
      game.addPopulation([{ alive: true }]);
      expect(game.verifyPopulation()).toBe(false);
    });
  });
});
