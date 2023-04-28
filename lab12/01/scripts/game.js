//Create consts.
const boardSize = 4;
const board = [];
const moves = document.getElementById('moves');
const time = document.getElementById('time');
let emptyTilePosition;
let timer;
let elapsedTime = 0;
let isGameOver = false;
let numMoves = 0; 

function createBoard() {
  const numbers = Array.from({ length: boardSize ** 2 - 1 }, (_, i) => i + 1);
  numbers.push('');
  // Random board
  numbers.sort(() => Math.random() - 0.5);

  for (let i = 0; i < boardSize; i++) {
    const row = [];

    for (let j = 0; j < boardSize; j++) {
      const tile = document.createElement('button');
      tile.classList.add('buttons');
      tile.innerText = numbers[i * boardSize + j];

      if (tile.innerText === '') {
        emptyTilePosition = { x: j, y: i };
      }

      tile.addEventListener('click', () => moveTile(j, i));
      row.push(tile);
      document.getElementById('puzzleBoard').appendChild(tile);
    }
    board.push(row);
  }
}

function startGame() {

  //Check if the board exists, if it is, then delete it create a new one. Restart the game.
  const existingBoard = document.getElementById('puzzleBoard');
  if (existingBoard) {

    //Reset board.
    existingBoard.innerHTML = '';

    //Clear the timer.
    clearInterval(timer);

    // Remove button listeners from previous board
    removeButtonListeners();

    // Reset board
    board.length = 0;
    emptyTilePosition = null;

    // Reset moves and time
    numMoves = 0;
    moves.innerText = `Movimientos: 0`;
    elapsedTime = 0;
    time.innerText = `Tiempo: 0 s`;
  }

  // Run timer once per second 
  timer = setInterval(updateTimer, 1000);

  //Create board
  createBoard();
}

//All possibles moves in the board.
function moveTile(x, y) {
  if (isGameOver) return;
  const dx = Math.abs(x - emptyTilePosition.x);
  const dy = Math.abs(y - emptyTilePosition.y);
  if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
    const tile = board[y][x];
    board[emptyTilePosition.y][emptyTilePosition.x].innerText = tile.innerText;
    board[emptyTilePosition.y][emptyTilePosition.x].classList.remove('empty');
    tile.innerText = '';
    tile.classList.add('empty');
    emptyTilePosition = { x, y };
    updateMoves();
    checkGameOver();
  }
}

//Update all moves
function updateMoves() {
  numMoves++;
  moves.innerText = `Movimientos: ${numMoves}`;
}

//Check if the games is over.
function checkGameOver() {
  let count = 1;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j].innerText !== '' && parseInt(board[i][j].innerText) !== count) {
        return;
      }
      count++;
    }
  }
  isGameOver = true;
  clearInterval(timer);
  alert(`¡Felicidades! Has resuelto el Puzzle-16 en ${elapsedTime} segundos.`);
}

//Update the time as time goes by
function updateTimer() {
  elapsedTime++;
  time.innerText = `Tiempo: ${elapsedTime} s`;
}

function removeButtonListeners() {
  if (board.length === 0) {
    return;
  }
  
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const button = board[i][j];
      button.removeEventListener('click', moveTile);
    }
  }
}

//Once play, start the game.
document.getElementById('play').addEventListener('click', () => {
  startGame();
});