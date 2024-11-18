// Cubes Cubes Cubes
// Kyle MacLean
// November 18, 2024

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  angle = map(mouseX, 0, width, -90, 90);
  rotateY(frameCount);

  for (let i = 0; i < 360; i += 45) {
    push();

    rotateY(i);
    boxes(30);

    pop();
  }
}

function boxes(size) {
  if (size > 3) {
    rotateZ(angle);
    translate(size * 1.5, 0);
    box(size);

    boxes(size * 0.8);
  }
}