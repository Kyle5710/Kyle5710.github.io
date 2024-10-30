//Insert your Comment Header here.

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 255, 0, 0, 0], [255, 255, 255, 0, 0]];
let checkTile = 0;
let displayText;

//if normal click should equate to a cross or rectangle pattern
let currentState = 1;

function setup() { 
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  //randomize the tiles colors on setup
  randomizeBoard();
}

function draw() {
  background(220);
  determineActiveSquare(); //figure out which tile the mouse cursor is over
  drawGrid();

  //check if player has won
  playerWon();

}

function playerWon() {
  //scan through every tile on grid and return if all of them are 0 or 255
  displayText = winCondition();

  //show text if true
  if (displayText === true) {
    textSize(100);
    fill("red");
    text("You Win!", windowWidth / 2, windowHeight / 2);
  }
}

function keyPressed(){
  //change state between cross and rectangle when space is pressed
  if (keyCode === 32) {
    currentState *= -1;
  }
}

function mousePressed() {
  if (keyIsPressed) {
    if (keyCode === SHIFT) {
      //if shift is down and mouse clicked
      flip(currentCol, currentRow);
    }
  }

  else if (currentState === 1) {
    //normal click creates cross pattern
    flip(currentCol, currentRow);
    flip(currentCol - 1, currentRow);
    flip(currentCol + 1, currentRow);
    flip(currentCol, currentRow - 1);
    flip(currentCol, currentRow + 1);
  }

  else if (currentState === -1) {
    //normal click creates rectangle pattern
    flip(currentCol, currentRow);
    flip(currentCol, currentRow + 1);
    flip(currentCol + 1, currentRow);
    flip(currentCol + 1, currentRow + 1);
  }
}

function randomizeBoard() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let i = round(random(0, 1));

      if (i === 1) {
        gridData[y][x] = 255;
      }

      else {
        gridData[y][x] = 0;
      }
    }
  }
}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) {
        gridData[row][col] = 255;
      }

      else {
        gridData[row][col] = 0;
      }
    }
  }
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() {
  //check through all roads
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      //if black then add 0
      if (gridData[y][x] === 0) {
        checkTile += 0;
      }

      //if white then add 1
      else {
        checkTile += 1;
      }
    }
  }

  if (checkTile === 0 || checkTile === 20) {
    //if all white or black then player has won
    checkTile = 0;
    return true;
  }

  else {
    //reset back to 0
    checkTile = 0;
    return false;
  }
}

function coloredOverlay() {
  //color potentiallly affected squares in a green overlay here
  
}