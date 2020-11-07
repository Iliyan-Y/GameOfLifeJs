let Game = require('./lib/Game');

let game = new Game();

async function gameRunner() {
  game.addPopulation(createGeneration());

  let count = 0;
  while (count != 10) {
    game.verifyPopulation();
    await displayCells(game);
    console.log('\r');
    if (count == 5) {
      game.population = [];
      game.addPopulation(createGeneration());
      count = 0;
    }
    count++;
  }
}

function createGeneration() {
  let generation = [];
  for (let i = 0; i != 70; i++) {
    let randomCell = getRandomInt(2) == 0 ? false : true;
    generation.push(new game.cell(randomCell));
  }
  return generation;
}

function displayCells(game) {
  let display = [];
  let chartReader = 0;

  game.population.forEach((cell) => {
    if (cell.alive) {
      display.push('+');
    } else {
      display.push('-');
    }
  });

  let readArray = setInterval(function () {
    process.stdout.write(display[chartReader++]);
    chartReader %= display.length;
  }, 5);

  return new Promise((resolve) =>
    setTimeout(() => {
      readArray;
      clearInterval(readArray);
      resolve();
    }, 365)
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

gameRunner();
