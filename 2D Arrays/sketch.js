// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[0, 0, 0, 0, 0],
[0, 0, 255, 0, 0],
[0, 0, 0, 0, 0]];

let time = 60;

const NUM_ROWS = 3;
const NUM_COLS = 5;



let rectWidth, rectHeight;
let col, row;

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(grid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function getArrayY() {
  return int(mouseY / rectHeight);
}

function getArrayX() {
  return int(mouseX / rectWidth);
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500 / NUM_COLS;
  rectHeight = 300 / NUM_ROWS;
}

function draw() {
  row = getArrayY();
  col = getArrayX();
  background(220);
  renderGrid();

  if (frameCount % 30 === 0) {
    time--;
    
  }

  if(frameCount % time === 0){
    grid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = 255;
  }

  print(mouseX, rectWidth, int(mouseX / rectWidth));
}

function mousePressed() {
  if (grid[row][col] === 0) {
    grid[row][col] = 255;

  }
  else {
    grid[row][col] = 0;
  }
}