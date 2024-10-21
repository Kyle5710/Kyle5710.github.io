// Cars! Cars! Cars!
// Kyle MacLean
// October 18, 2024
// Simulation of vehicles commuting on a road

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(1000, 1000);
  //push 20 vehicles into each array here
  //east should have positive xSpeed, direction set properly, y random but in correct lane
  //west should have the opposite
}

function draw() {
  background(35);
  drawRoad();
}

function drawRoad() {
  fill(0);
  rect(0, 240, width, 500);

  stroke("white");
  strokeWeight(5);
  drawingContext.setLineDash([20, 20]); //length, spacing
  line(0, height / 2, width, height / 2);

  noStroke();
}

class Vehicle{
  constructor(type, color, x, y, direction, xSpeed){
    //this.type: 0 = car, 1 = truck
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  move(){

  }

  speedUp(){

  }

  speedDown(){

  }

  changeColor(){

  }

  display(){
    
  }
}
