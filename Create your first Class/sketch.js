// Create your First Class
// Kyle MacLean
// October 15, 2024

//racer array
let racers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let yPos = 0; //set starting racer yPos

  for (i = 0; i < 3; i++) {
    yPos += 100; //space racers by 100px
    racers.push(new RoundRacer(yPos, color(random(255), random(255), random(255)))); //random colors
  }
}

function draw() {
  background(0);

  for (let i = 0; i < racers.length; i++) {
    //move and display racers
    racers[i].move();
    racers[i].display();
  }
}

class RoundRacer {
  constructor(yPos, color) {
    this.yPosition = yPos;
    this.xPosition = 0;
    this.color = color;
    this.xSpeed = random(3, 15);
  }

  display() {
    fill(this.color);
    circle(this.xPosition, this.yPosition, 50);
  }

  move() {
    this.xPosition += this.xSpeed;

    if (this.xPosition > width) {
      //reset if offscreen
      this.xPosition = 0;
    }
  }
}

