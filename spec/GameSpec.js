describe('Game', () => {
  var Game = require('../lib/Game');
  let game;

  beforeEach(function () {
    game = new Game();
  });

  describe('createGeneration', () => {
    it("create's a new generation of cells", () => {
      game.createGeneration(['TEST']);
      expect(game.population[0][0]).toEqual('TEST');
    });
  });

  describe('verifyGeneration', () => {
    it('Checks if the current generation with one cell is dead', () => {
      game.createGeneration(['TEST']);
      expect(game.verifyGeneration()[0]).toBe(false);
    });
  });
});
