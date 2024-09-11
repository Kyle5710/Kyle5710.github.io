// Coordinate Systems
// Kyle MacLean
// September 11, 2024
// Looking at how corrdinates work in p5.js


function setup() {
  print("Setup runs once, at the start.")
  createCanvas(500, 400);
}

function draw() {
  // runs over and over (targetting 60fps)
  // when possible, keep draw() short
  background(220);

  circles()
}

function circles() {
  // draw some circles
    fill(255, 0, 0); // fill circles with color
    circle(0, 0, 50); // top left
  
    fill(0, 255, 0);
    circle(width, 0, 50); // top right
  
    fill(0, 0, 255);
    circle(0, height, 50); // bottom left
  
    fill(10, 63, 60);
    circle(width, height, 50); // bottom right
  
    fill(255, 255, 255);
    circle(width/2, height/2, 50); // center
}

