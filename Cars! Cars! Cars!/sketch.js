// Cars! Cars! Cars!
// Kyle MacLean
// October 18, 2024
// Simulation of vehicles commuting on a road

//arrays for vehicles for both lanes
let eastbound = [];
let westbound = [];

//check if traffic light is green or not
let moving = true;

//var to help with tracking frames for the traffic light
let timeElapsed = 0;

function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
  for (i = 0; i < 20; i++) {
    //push 20 vehicles into each lane
    createVehicle("east");
    createVehicle("west");
  }

  trafficLight = new TrafficLight("green");
}

function draw() {
  //update timeElapsed var to track frames
  timeElapsed++;

  background(35);
  drawRoad();
  updateVehicles();
  timeLogic();

  trafficLight.update();
}

function mouseClicked() {
  //add new vehicles in their correct lanes dependent on user input
  if (keyIsPressed && keyCode === SHIFT) {
    //create westbound vehicle
    createVehicle("west");
    print("Car Added Westbound!");
  }

  else {
    //create eastbound vehicle
    createVehicle("east");
    print("Car Added Eastbound!");
  }
}

function createVehicle(direction){
  //spawn vehicle depending on direction given
  if(direction === "east"){
    eastbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(250, height / 2 - 50), 1, random(-1, -5)));
  }

  else{ //westbound vehicles
    westbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(height / 2 + 25, 700), 0, random(1, 5)));
  }
}

function updateVehicles() {
  //update all vehicles in their respective arrays
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].update();
  }

  for (let i = 0; i < westbound.length; i++) {
    westbound[i].update();
  }
}

function drawRoad() {
  //draws the road
  fill(0);
  rect(0, 240, width, 500);

  stroke("white");
  strokeWeight(5);
  drawingContext.setLineDash([20, 20]); //length, spacing
  line(0, height / 2, width, height / 2);

  noStroke();
}

function vehicleType(type, x, y, color) {
  //draws the cars depending on their type
  if (type === 0) { //car
    fill("brown");
    rect(x + 40, y - 5, 10);
    rect(x, y + 20, 10);
    rect(x, y - 5, 10);
    rect(x + 40, y + 20, 10);
    fill(color);
    rect(x, y, 50, 25);
  }

  else { //truck
    fill(color);
    rect(x, y, 75, 25);
    stroke("black");
    strokeWeight(5);
    line(x + 25, y + 2.5, x + 25, y + 25);
    noStroke();
  }
}

function timeLogic() {
  if (timeElapsed === 120) {
    //120 frames pass then set moving and this.state to true
    moving = true;
    trafficLight.state = "green";
  }

  else if (timeElapsed > 0 && timeElapsed < 120) {
    //else this.state = red
    trafficLight.state = "red";
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

  update() {
    //update all vehicle actions

    if (moving) {
      //traffic light isn't red
      this.move();
      this.speedUp();
      this.speedDown();
      this.changeColor();
    }

    this.display();
  }

  move() {
    //moves cars depending on this.xSpeed
    this.x += this.xSpeed;
    timeElapsed = 0;

  }

  speedUp() {
    //1% chance to speed up vehicles
    if (round(random(1, 100)) === 1) {
      if (this.direction === 1) {
        this.xSpeed -= random(3);
      }

      else {
        this.xSpeed += random(3);
      }

      //make sure this.xSpeed is always between -15 and 15
      this.xSpeed = Math.max(-15, Math.min(this.xSpeed, 15));

      print("Speed Up!");
      print(this.xSpeed);
    }
  }

  speedDown() {
    //1% chance to speed down vehicles
    if (round(random(1, 100)) === 1) {
      if (this.direction === 1) {
        this.xSpeed += random(2);

        if (this.xSpeed > 0) {
          this.xSpeed = 0;
        }
      }

      else {
        this.xSpeed -= random(2);

        if (this.xSpeed < 0) {
          this.xSpeed = 0;
        }
      }

      print("Speed Down!");
      print(this.xSpeed);
    }
  }

  changeColor() {
    //1% chance to change vehicles color
    let chance = round(random(1, 100));
    if (chance === 1) {
      this.color = color(random(255), random(255), random(255));

      print("Changed Color!");
    }
  }

  display() {
    //display vehicles and wrap around code
    vehicleType(this.type, this.x, this.y, this.color);

    if (this.x > width + 50) {
      this.x = -100;
    }

    else if (this.x < -100) {
      this.x = width;
    }
  }
}

class TrafficLight {
  constructor(state) {
    this.state = state;
  }

  update() {
    //set color to this.state
    fill(this.state);

    rect(width / 2, 190, 50);

    this.state = "green";

    if (keyIsPressed && keyCode === 32) {
      this.state = "red";
      //stop all vehicles
      moving = false;
      timeElapsed = 0;
    }
  }
}