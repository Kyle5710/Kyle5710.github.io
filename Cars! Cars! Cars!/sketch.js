// Cars! Cars! Cars!
// Kyle MacLean
// October 18, 2024
// Simulation of vehicles commuting on a road

let lightState = "green";
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(1000, 1000);
  for (i = 0; i < 20; i++) {
    //push 20 vehicles into each lane
    eastbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(250, height / 2 - 50), 1, random(-1, -5)));
    westbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(height / 2 + 25, 700), 0, random(1, 5)));
  }

  trafficLight = new TrafficLight("green");
}

function draw() {
  background(35);
  drawRoad();
  updateVehicles();

  trafficLight.update();
}

function mouseClicked() {
  //add new vehicles in their correct lanes dependent on user input
  if (keyIsPressed && keyCode === SHIFT) {
    westbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(height / 2 + 25, 700), 0, random(1, 5)));
    print("Car Added Westbound!");
  }

  else {
    eastbound.push(new Vehicle(round(random(0, 1)), color(random(255), random(255), random(255)), random(0, width), random(250, height / 2 - 50), 1, random(-1, -5)));
    print("Car Added Eastbound!");
  }
}

function updateVehicles() {
  //update time
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
  if (type === 0) {
    fill("brown");
    rect(x + 40, y - 5, 10);
    rect(x, y + 20, 10);
    rect(x, y - 5, 10);
    rect(x + 40, y + 20, 10);
    fill(color);
    rect(x, y, 50, 25);
  }

  else if (type === 1) {
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

  update() {
    //update time
    this.move();
    this.speedUp();
    this.speedDown();
    this.changeColor();
    this.display();
  }

  move() {
    //moves cars depending on this.xSpeed
    this.x += this.xSpeed;
  }

  speedUp() {
    //1% chance to speed up vehicles
    if (round(random(1, 100)) === 1) {
      if (this.direction === 1) {
        this.xSpeed -= random(3);
      }

      else if (this.direction === 0) {
        this.xSpeed += random(3);
      }

      if (this.xSpeed > 15) {
        this.xSpeed = 15;
      }

      if (this.xSpeed < -15) {
        this.xSpeed = -15;
      }

      print("Speed Up!");
      print(this.xSpeed);
    }
  }

  speedDown() {
    //1% chance to speed down vehicles
    if (round(random(1, 100)) === 1) {
      if (this.direction === 1) {
        this.xSpeed += random(2.5);

        if (this.xSpeed > 0) {
          this.xSpeed = 0;
        }
      }

      else if (this.direction === 0) {
        this.xSpeed -= random(2.5);

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
    fill(this.state);

    rect(width / 2, height / 2 - 25, 50);

    //FIX THIS
    if (keyIsDown && keyCode === 32) {
      this.state = "red";
      if (this.state === "red") {
        //stop all vehicles for 120 frames
        frameRate(0);

        //turn state back to green
        this.state = "green";
      }
    }
  }
}