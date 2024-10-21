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
  for (i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(250, height/2 - 50), 1, random(-1, -5))); 
    westbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(400, height)), 0, random(1, 5));
  }

}

function draw() {
  background(35);
  drawRoad();

  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].display();
    eastbound[i].move();
    eastbound[i].speedUp();
    eastbound[i].speedDown();
    eastbound[i].changeColor();
  }

  /* for (let i = 0; i < westbound.length; i++) {
    westbound[i].display();
    westbound[i].move();
  } */
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

function vehicleType(type, x, y, color) {
  if (type === 0) {
    fill("brown");
    rect(x + 40, y - 5, 10);
    rect(x, y + 20, 10);
    rect(x, y - 5, 10);
    rect(x + 40, y + 20, 10);
    fill(color);
    rect(x, y, 50, 25);
  }

  else if(type === 1){
    fill("grey");
    rect(x + 65, y - 5, 10);
    rect(x, y + 20, 10);
    rect(x, y - 5, 10);
    rect(x + 65, y + 20, 10);
    fill(color);
    rect(x, y, 75, 25);
  }
}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    //this.type: 0 = car, 1 = truck
    //eastbound direction = 1 westbound direction = 0
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  move() {
    this.x += this.xSpeed;
  }

  speedUp() {
    let chance = round(random(1,100));
    if(chance === 1){
      //do stuff
    }
  }

  speedDown() {
    let chance = round(random(1,100));
    if(chance === 1){
      //do stuff
    }
  }

  changeColor() {
    let chance = round(random(1,100));
    if(chance === 1){
      //do stuff
    }
  }

  display() {
    vehicleType(this.type, this.x, this.y, this.color);

    if(this.x > width + 50){
      this.x = 0;
    }
    
    else if (this.x < -100) {
      this.x = width;
    }
  }
}
