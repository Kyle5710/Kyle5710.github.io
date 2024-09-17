//Interactive Scene Project
//Kyle MacLean
//September 16, 2024
//An scene that the user can interact with

//background vars
let currentBack = 0;
let currentBackColor = "cyan";

//cloud x and y positions
let xPos = 150;
let yPos = 350;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(currentBackColor);
  noStroke();

  //draw our clouds
  fill("white");
  cloud();

  //draw ground
  fill("Tan");
  rect(0, 3000, 8000, 1000);

  //artist mark
  fill("black");
  textSize(200);
  text("Kyle", 7000, 3750);

  //house
  fill("yellow");
  rect(2000, 2200, 1000, 800);
  fill("red");
  triangle(1950, 2225, 2500, 1600, 3050, 2225);
  fill("brown");
  rect(2500, 2500, 300, 500);
  fill("gold");
  circle(2725, 2750, 75);
  fill("lightblue");
  rect(2050, 2500, 400, 250);
}

//fix backgrounds, add character, both mouse and keyboard input, use currentBack var

function cloud(){
  let randomInt = random(375, 525);
  xPos += randomInt;
  circle(xPos + 160, yPos, 400);
  circle(xPos - 100, yPos, 400);
  circle(xPos - 125, yPos + 70, 400);
  circle(xPos - 145, yPos - 90, 400);
  circle(xPos + 140, yPos - 76, 400);
  circle(xPos - 35, yPos - 140, 400);
  circle(xPos, yPos + 120, 400);
  xPos = 0;
}

