// Interactive Scene Project
// Kyle MacLean
// September 16, 2024
// An scene that the user can interact with

// background vars
let currentBack = 0;
let currentBackColor = "green";

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(currentBackColor);
  noStroke();

  // draw our clouds
  for(let i = 0; i < 4; i++){
    circle(200, 100, 75);
    circle(100, 100, 75);
    circle(125, 125, 75);
    circle(105, 73, 75);
    circle(170, 60, 75);
    circle(145, 70, 75);
    circle(150, 120, 75);
    print("hello");
  }
}

function draw() {
  background("blue");
  
  
}

// fix backgrounds, make the clouds not spawn ontop of each other, add character, artist mark, both mouse and keyboard input, use currentBack var



