describe('Game', () => {
  var Game = require('../lib/Game');
  let FakceCell = require('./helpers/FakeCell');
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
    it('Confirm thet cell cant live alone', () => {
      game.addPopulation([new FakceCell()]);
      game.verifyPopulation();
      expect(game.population[0].alive).toBe(false);
    });

    it('Any live cell with less than 2 live neighbours dies', () => {
      game.addPopulation([new FakceCell(), new FakceCell(false)]);
      game.verifyPopulation();
      expect(game.population[0].alive).toBe(false);
    });

    it('Any live cell with less than 2 live neighbours dies', () => {
      game.addPopulation([new FakceCell(false), new FakceCell()]);
      game.verifyPopulation();
      expect(game.population[1].alive).toBe(false);
    });
  });
});
