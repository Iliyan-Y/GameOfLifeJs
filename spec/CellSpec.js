describe('Cell', function () {
  var Cell = require('../lib/Cell');
  var cell;

  beforeEach(function () {
    cell = new Cell();
  });

  it('should be able to be alive by default', function () {
    expect(cell.alive).toBe(true);
  });

  it('should be able to be die', function () {
    cell.die();
    expect(cell.alive).toBe(false);
  });
});
