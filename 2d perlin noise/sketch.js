// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let inc = 0.01;
let xOff;
let yOff;


function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  yOff = 0;

  loadPixels();
  background(51);
  stroke(255);
  noFill();
  beginShape();

  for (let y = 0; y < width; y++) {
    xOff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xOff, yOff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xOff += inc;
    }

    yOff += inc;
  }
  updatePixels();
}
