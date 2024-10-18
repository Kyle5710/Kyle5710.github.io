// OOP Pair Programming Starter Code
// Your Names
// October 17, 2024

let enterprise;
let shipImage, bulletImage;
let shipSpeed = 5;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  if (keyCode === 32) {
    enterprise.handleKeyPress();
  }
}

class Ship {
  constructor(x, y, shipImage) {
    this.x = x;
    this.y = y;
    this.image = shipImage;
    this.bullets = [];
  }

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= shipSpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += shipSpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += shipSpeed;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= shipSpeed;
    }

    //creates a new array only containing bullets that are still on screen
    this.bullets = this.bullets.filter(b => (b.update(), b.isOnScreen()));
  }

  display() {
    image(this.image, this.x, this.y);
    for (let b of this.bullets) {
      b.display();
    }
  }

  handleKeyPress() {
    if (keyCode === 32) {
      this.bullets.push(new Bullet(this.x + 35, this.y, 0, 15, bulletImage));
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, bulletImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = bulletImage;
  }

  update() {
    this.y -= this.dy;
  }

  display() {
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    return this.y > 0;
  }
}
