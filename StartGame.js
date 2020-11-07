let Game = require('./lib/Game');

let game = new Game();

async function gameRunner() {
  let reset = 0;
  game.addPopulation(createGeneration());

  while (true) {
    if (reset == 5) {
      game.population = [];
      game.addPopulation(createGeneration());
      reset = 0;
    }

    game.verifyPopulation();
    await displayCells(game);
    console.log('\r');
    reset++;
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
  convertToCharacters(game, display);

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

function convertToCharacters(game, display) {
  game.population.forEach((cell) => {
    if (cell.alive) {
      display.push('+');
    } else {
      display.push('-');
    }
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

gameRunner();
