// Drawing Challenge
// Kyle MacLean
// September 13, 2024

/* let rX = 50; let rY = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  // moving rectangle
  if(keyIsPressed && key === "a"){
    // good for checking when a key is held
    rY += 2;
    if(rY > height) rY = 0;
  }

  fill("yellow");
  rect(rX,  rY, 100, 50, 10, 20, 0, 10);
}

function keyPressed(){
  //dont call this function it runs automatically
  if(keyCode === 83){
    rY += 50;
  }
} */

let headSize = 50;
let centerPosX = 150;
let centerPosY = 50;

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw(){
  background(220);

  //first
  fill("green");
  noStroke();
  circle(50, 50, 50);
  rect(30, 75, 10, 30);
  rect(70, 75, 10, 30);
  rect(50, 65, 50, 25);
  fill("black");
  circle(38, 50, 5);
  circle(62, 50, 5);
  rect(50, 60, 15, 2);

  //second
  fill("green");
  circle(centerPosX, centerPosY, headSize);
  rect(centerPosX, centerPosY + 15, headSize, headSize - 25);

}




