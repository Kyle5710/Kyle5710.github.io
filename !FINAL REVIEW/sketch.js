//global vars
let gorillaIdle = [];
let gorillaSwipe = [];
let idleIndex = 0; let swipeIndex = 0;
let gorillaState = 0; //0 → Idle 1 → Swipe

let spiralImages = [];
let spiralObjects = [];

function preload() { //ensures loading is complete
  //gorilla images first 1-6
  for (let i = 1; i <= 6; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }

  //load circle images next: circle00.png 00-15
  for (let i = 0; i <= 15; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/circle0" + i + ".png"));
    }

    else {
      spiralImages.push(loadImage("assets/Circle/circle" + i + ".png"));
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key === " ") {
    if (gorillaState === 0) {
      gorillaState = 1;
    }
    else {
      gorillaState = 0;
    }
  }
}

function mousePressed() {
  spiralObjects.push(new Spiral(mouseX, mouseY));
}

function draw() {
  background(220);

  //Spiral code
  for (let i = 0; i < spiralObjects.length; i++) {
    spiralObjects[i].display();
    if (!spiralObjects[i].active) {
      spiralObjects.splice(i, 1);
      i--;
    }
  }

  //Gorilla code
  if (gorillaState === 0) { //IDLE
    image(gorillaIdle[idleIndex], width / 2, height / 2);
    if (frameCount % 10 === 0) {
      idleIndex++;
      if (idleIndex > 5) {
        idleIndex = 0;
      }
    }
  }

  else if (gorillaState === 1) { //SWIPE
    image(gorillaSwipe[swipeIndex], width / 2, height / 2);
    if (frameCount % 10 === 0) {
      swipeIndex++;
      if (swipeIndex > 5) {
        swipeIndex = 0;
      }
    }
  }
}

class Spiral {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.currentFrame = 0;
    this.active = true;
  }

  //class methods
  display() {
    if (this.currentFrame > 15) {
      this.active = false;
    }

    else {
      image(spiralImages[this.currentFrame], this.x, this.y);
      if (frameCount % 3 === 0) {
        this.currentFrame++;
      }
    }
  }
}