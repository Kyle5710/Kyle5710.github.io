// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let obama;

function setup() {
  createCanvas(1280, 720);
  obama = loadImage("obamaconcept (1).png");
}

function draw() {
  background(0);
  
  imageMode(CENTER);
  
  image(obama, width/2, height/2, 126, 320);

  scale(2.0);
}
