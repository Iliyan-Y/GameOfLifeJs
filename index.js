let Game = require('./lib/Game');

let game = new Game();

function gameRunner() {
  let generation = [];
  for (let i = 0; i != 20; i++) {
    let randomCell = getRandomInt(2) == 0 ? false : true;
    generation.push(new game.cell(randomCell));
  }
  game.addPopulation(generation);

  let count = 0;

  console.log(displayCells(game));

  while (count != 4) {
    game.verifyPopulation();
    console.log(displayCells(game));
    count++;
  }
}

function displayCells(game) {
  let display = '';
  game.population.forEach((cell) => {
    if (cell.alive) {
      display += 'X|';
    } else {
      display += '0|';
    }
  });
  return display;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

gameRunner();
