//Interactive Scene Project
//Kyle MacLean
//September 16, 2024
//An scene that the user can interact with

//change background vars
let currentBack = 0;
let currentBackColor = "cyan";

//cloud x and y positions
let xPos = -200;
let yPos = 550;

//skateboard position
let skatePos = 3000;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  //change the background when we hit the middle mouse button
  changeBackground();
  background(currentBackColor);

  //get rid off outlines
  noStroke();

  //draw our clouds
  fill("white");
  cloud();

  //draw ground
  fill("Tan");
  rect(0, 3000, width, height);

  //house
  fill("yellow");
  rect(2000, 2200, 1000, 800);
  fill(166, 47, 32);
  triangle(1950, 2225, 2500, 1600, 3050, 2225);
  fill("brown");
  rect(2500, 2500, 300, 500);
  fill("gold");
  circle(2725, 2750, 75);
  fill("lightblue");
  rect(2050, 2500, 400, 250);

  //draw skateboard
  skateboard();

  //artist mark
  fill("black");
  textSize(200);
  text("Kyle", windowWidth - 500, windowHeight - 100);

  //draw character and make it follow the mouse
  character();
}

function cloud(){
  //speed
  let randomInt = random(14,15);
  xPos += randomInt;
  //draw parts of cloud
  circle(xPos + 160, yPos, 400);
  circle(xPos - 100, yPos, 400);
  circle(xPos - 125, yPos + 70, 400);
  circle(xPos - 145, yPos - 90, 400);
  circle(xPos + 140, yPos - 76, 400);
  circle(xPos - 35, yPos - 140, 400);
  circle(xPos, yPos + 120, 400);
  //loop cloud around the screen
  if(xPos > windowWidth + 400){
    xPos = -200;
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

function mouseClicked(){
  if(mouseButton === LEFT && currentBack < 3){
    currentBack += 1;
  }
  //reset var to loop colors
  else currentBack = 0;
}

function changeBackground(){
  //colors for each number
  print(currentBack);
  if(currentBack === 0){
    currentBackColor = "cyan";
  }

  if(currentBack === 1){
    currentBackColor = "red";
  }

  if(currentBack === 2){
    currentBackColor = "green";
  }

  if(currentBack === 3){
    currentBackColor = "purple";
  }
}

function skateboard(){
  if(keyIsPressed === true){
    if(keyCode === RIGHT_ARROW){
      skatePos = skatePos + 15;
    }

    else if(keyCode === LEFT_ARROW){
      skatePos = skatePos - 15;
    }
  }

  fill("orange");
  rect(skatePos + 500, 2900, 100, 100, 50);
  rect(skatePos + 1000, 2900, 100, 100, 50);
  fill("black");
  rect(skatePos + 400, 2800, 800, 100, 50);

  if(skatePos > windowWidth - 500 || skatePos < -1000 || keyCode === 82){
    skatePos = 3000;
  }
}
