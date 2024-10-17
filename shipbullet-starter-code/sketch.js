// OOP Pair Programming Starter Code
// Your Names
// October 17, 2024

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

class Ship {
  constructor(x, y, shipImage) {
    this.x = x;
    this.y = y;
    this.image = shipImage;
    this.bullets = [];
  }

  update() {
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 2;
    }

    if(keyIsDown(RIGHT_ARROW)){
      this.x += 2;
    }

    if(keyIsDown(DOWN_ARROW)){
      this.y += 2;
    }

    if(keyIsDown(UP_ARROW)){
      this.y -= 2;
    }

    for(b of this.bullets){
      b.update();
    }
    
  }

  display() {
    image(shipImage, this.x, this.y);
    for(b of this.bullets){
      b.display();
    }
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if(keyIsDown(32)){
      this.bullets.push(new Bullet(this.x, this.y, 0, 15, bulletImage));
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
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y -= this.dy;
  }

  display() {
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
  }
}

