// State Variables
// Kyle MacLean
// September 25, 2024

// Global Variables
let currentColor = 0; //0, 1, 2
let circleSize = 500;
let growing = false; //2 state variable
let myColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50, 230, 165); //3-tuple
}

function draw() {
  background(255);

  //circle code - fill value using SWITCH statement
  switch (currentColor) { //what is the value of currentColor?
    case 0:
      fill(255, 0, 0);
      break;

    case 1:
      fill(myColor);
      break;

    case 2:
      fill(0, 255, 255);
      break;

  }

  // circle: change the color state (variable)
  if (frameCount % 60 === 0) {//true once each 60 frames
    currentColor++;
    if (currentColor > 2) currentColor = 0;
  }

  //circle, grow/shrink
  if (growing) circleSize += 2;
  else circleSize -= 2;

  //ACTUALLY draw it
  circle(width / 2, height / 2, circleSize);


}


function keyPressed(){
  //called automatically when a key is pressed
  if(key === "a"){
    growing = !growing;
  }
}