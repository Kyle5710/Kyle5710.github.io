// Working with Images
// Kyle MacLean
// October 4, 2024

let lionL, lionR;
let facingRight = true
let pinImages = []; //empty array
let currentFrame = 0;

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);

  //check what direction mouse is moving in
  lionDirection();

  //draw the actual lion at mouse position
  drawLions();

  //draw the pinwheel
  pinWheel();
}

function lionDirection() {
  if (mouseX > pmouseX) facingRight = true;

  else if (mouseX < pmouseX) facingRight = false;
}

function drawLions() {
  if (facingRight) image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height / 2);

  else image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
}

function pinWheel() {

  image(pinImages[currentFrame], width / 2, height / 2);

  if (frameCount % 5 === 0) { //every fifth frame
    currentFrame++;
    
    if (currentFrame > 8) currentFrame = 0;
  }

}