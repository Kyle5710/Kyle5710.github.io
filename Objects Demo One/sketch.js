// Objects Demo One
// Kyle MacLean
// October 10, 2024

let myMover, myMover2;
let movers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  for(i = 0; i < 1000; i++){
    movers.push(new Mover(random(width), random(height)));
  }
}

function draw() {
  //background(0);
  for(let i = 0; i < movers.length; i++){
    movers[i].move();
    movers[i].display();
  }
}

function mouseClicked(){
  movers.push(new Mover(mouseX, mouseY));
}

class Mover{
  constructor(x, y){
    //constructor function is called ONCE only
    //when an object is made

    this.x = x;
    this.y = y;
    this.xSpeed = random(5);
    this.ySpeed = random(5);
  }

  //class functions = all the "things" the an object can do
  display(){
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  } 

  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
    }
  }
}
