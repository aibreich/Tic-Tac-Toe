let dvBox = document.getElementsByClassName("dvBox");
let sumOutput = document.getElementById("sumOutput");
// the array that holds the boards input
let board = [];
// the two players
let player1 = "X";
let player2 = "O";
// the tracker of which player is going first
let currentPlayer = player1;
// for loop to add event listeners onto the boxes
for (let i = 0; i < dvBox.length; i++) {
  dvBox[i].addEventListener("click", pickSpot);
}

// global counter to have the turn based game work
let move = 0;
// the function for picking the spots on the board
function pickSpot(event) {
  let boxSpot = event.target.dataset.cell;
  console.log(boxSpot);
  if (!board[boxSpot]) {
    // console.log(board[boxSpot]);
    board[boxSpot] = currentPlayer;
    event.target.innerHTML = currentPlayer;
    // win function that charges
    if (theWin()) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;

      return;
    }

    if (tiedGame()) {
      return;
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
  console.log(board);
  console.log(currentPlayer);
}

function theWin() {
  // tracking if the current player has hit a win
  //   the first if statement is for the combos of the box in the top left corner
  if (board[0] === currentPlayer) {
    if (board[1] === currentPlayer && board[2] === currentPlayer) {
      console.log(`${currentPlayer} wins`);
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;

      return true;
    }
    if (board[3] === currentPlayer && board[6] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (board[4] === currentPlayer && board[8] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  //   this is the win combo for the center top box straight down
  if (board[1] === currentPlayer) {
    if (board[4] === currentPlayer && board[7] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  //   the win combo for the middle row
  if (board[3] === currentPlayer) {
    if (board[4] === currentPlayer && board[5] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  //   combos for the bottom right corner for right side straight up and the bottom row
  if (board[8] === currentPlayer) {
    if (board[5] === currentPlayer && board[2] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
    if (board[6] === currentPlayer && board[7] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
  //   the win for the top right box going diagnally
  if (board[2] === currentPlayer) {
    if (board[4] === currentPlayer && board[6] === currentPlayer) {
      sumOutput.innerHTML = `${currentPlayer}'s have won!`;
      console.log(`${currentPlayer} wins`);
      return true;
    }
  }
}

// this is the function for a tied game
function tiedGame() {
  // this is the draw counter that counts up to nine
  let draw = 0;
  //   using a for each function to track all the items in the array
  board.forEach((space, i) => {
    //   if the spaces dont equal null then draw +1
    if (board[i] !== null) draw++;
  });
  //   if draw = 9 show a draw
  if (draw === 9) {
    sumOutput.innerHTML = "Draw";
    console.log("draw");
  }
}

// restart function that reloads the page because i was unable to figure out how to reset the board
function restart() {
  location.reload();
}
