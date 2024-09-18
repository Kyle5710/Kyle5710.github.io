//Interactive Scene Project
//Kyle MacLean
//September 16, 2024
//An scene that the user can interact with

//change background vars
let currentBack = 0;
let currentBackColor = "cyan";

//cloud x and y positions
let xPos = 150;
let yPos = 550;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  //change the background when we hit the middle mouse button
  changeBackground();

  noStroke();

  //draw our clouds
  fill("white");
  cloud();

  //draw ground
  fill("Tan");
  rect(0, 3000, 8000, 1000);

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

  //draw character and make it follow the mouse
  character();

  //artist mark
  fill("black");
  textSize(200);
  text("Kyle", 7000, 3750);
}


function cloud(){
  let randomInt = random(14,15);
  xPos += randomInt;
  circle(xPos + 160, yPos, 400);
  circle(xPos - 100, yPos, 400);
  circle(xPos - 125, yPos + 70, 400);
  circle(xPos - 145, yPos - 90, 400);
  circle(xPos + 140, yPos - 76, 400);
  circle(xPos - 35, yPos - 140, 400);
  circle(xPos, yPos + 120, 400);
  if(xPos > 8000){
    xPos = 0;
  }
}


function character(){
  fill(254, 219, 177);
  rect(mouseX - 250, mouseY - 225, 500, 500, 500);
  fill("green");
  circle(mouseX - 110, mouseY - 20, 60);
  circle(mouseX + 110, mouseY - 20, 60);
  fill(247, 111, 111);
  rect(mouseX - 100, mouseY + 100, 200, 40, 0, 0, 70);
}


function changeBackground(){
  background(currentBackColor);

  if(mouseButton === "LEFT"){
    if(currentBack < 3){
      currentBack = 0;
    }

    else currentBack += 1;
  }

  if(currentBack === 0){
    currentBackColor = "cyan";
  }

  if(currentBack === 1){
    currentBackColor = "green";
  }

  if(currentBack === 2){
    currentBackColor = "purple";
  }

  if(currentBack === 3){
    currentBackColor = "black";
  }

  print(currentBack);
}