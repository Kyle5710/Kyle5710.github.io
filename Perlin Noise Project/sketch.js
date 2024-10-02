// Perlin Noise Project
// Kyle MacLean
// October 1, 2024
// describe it here later

//global vars
let noiseVar = 0;
let rectHeight = 0;
let rectWidth = 10;
let tallestRect = 0;
let tallestRectX = 0;
let averageHeight = 0;
let totalHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("cyan");

  //reset vars
  resetVars();

  //gives us the total number of rectangles
  let rectCount = width / rectWidth;

  //generates terrain but also returns a totalHeight var
  totalHeight = generateTerrain(); 
  
  //calc averageHeight
  averageHeight = totalHeight / rectCount;

  //call average height rect func
  averageHeightRect();

  //draw the flag
  drawFlag(tallestRectX, height - tallestRect);
}

function generateTerrain() {

  randomSeed(2);

  let localNoiseVar = noiseVar;

  for (let x = 0; x < width; x += rectWidth) {

    //terrain moment + mapping to screen height
    rectHeight = noise(localNoiseVar);
    rectHeight = map(rectHeight, 0, 1, 0, height);

    //draw rect
    rect(x, height, rectWidth, -rectHeight);

    //check for highest point in the rects
    if (rectHeight > tallestRect) {
      tallestRect = rectHeight;
      tallestRectX = x;
    }

    //calc totalHeight
    totalHeight += rectHeight;

    //terrain moment
    localNoiseVar += 0.01;
  }

  //return totalHeight counted throughout func
  return totalHeight;
}

function keyPressed() {
  //change width when arrow keys pressed
  if (keyCode === LEFT_ARROW && rectWidth > 1) {
    rectWidth -= 1;
  }

  if (keyCode === RIGHT_ARROW && rectWidth < 50) {
    rectWidth += 1;
  }
}

function drawFlag(x, y) {
  //draw the flag and set fill colors/position
  fill("black");
  rect(x, y - 45, 10, 45);
  fill("green");
  triangle(x + 10, y - 45, x + 10, y - 20, x + 35, y - 20);
  fill("white");
}

function averageHeightRect() {
  fill("red");
  //draw rect at average height across the screen
  rect(0, height - averageHeight, width, 10);
  fill("white");
}

function resetVars() {
  //reset/increment a ton of vars
  tallestRect = 0;
  tallestRectX = 0;
  noiseVar += 0.01;
  averageHeight = 0;
  totalHeight = 0;
}