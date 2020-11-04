describe('Cell', function () {
  var Cell = require('../lib/Cell');
  var cell;

  beforeEach(function () {
    cell = new Cell();
  });

  it('should be able to be alive by default', function () {
    expect(cell.alive).toBe(true);
  });

  it('cell can be created as dead', function () {
    deadCell = new Cell(false);
    expect(deadCell.alive).toBe(false);
  });

  it('should be able to be die', function () {
    cell.die();
    expect(cell.alive).toBe(false);
  });

  it('should be able to becomes alive', function () {
    cell.die();
    expect(cell.alive).toBe(false);
    cell.resurrect();
    expect(cell.alive).toBe(true);
  });
});
