let Game = require('./lib/Game');

let game = new Game();

async function gameRunner() {
  let generation = [];
  for (let i = 0; i != 70; i++) {
    let randomCell = getRandomInt(2) == 0 ? false : true;
    generation.push(new game.cell(randomCell));
  }
  game.addPopulation(generation);

  let count = 0;

  //console.log(displayCells(game));

  while (count != 10) {
    game.verifyPopulation();
    await twirlTimer();
    console.log(count);
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

  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(display);
      resolve();
    }, 300)
  );
}

var twirlTimer = function () {
  var P = ['O', 'K', 'T', 'O'];
  var x = 0;

  let timer = setInterval(function () {
    process.stdout.write(P[x++]);
    x %= P.length;
  }, 100);

  return new Promise((resolve) =>
    setTimeout(() => {
      timer;
      clearInterval(timer);
      resolve();
    }, 420)
  );
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

gameRunner();
