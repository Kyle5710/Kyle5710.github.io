// Events (Mouse/Keyboard)
// Kyle MacLean
// September 12, 2024

// Global Variable Scope
let tSize = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let position = mouseX + ", " + mouseY;
  textSize(tSize);
  text(position, mouseX, mouseY);

  fill(255, 0, 0);
  circle(width/2, height/2, 100);

  fill(0, 255, 0);
  square(width/2, height/2, 50);
}

function mousePressed(){
  tSize = random(2, 200);
}