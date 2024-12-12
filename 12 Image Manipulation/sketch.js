// Image Manipulation
// Kyle MacLean
// December 11, 2024

let pilot; //p5.image  .width  .height

function preload() {
  pilot = loadImage("assets/aviator.png");
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function drawCharacter(x, y, avg) {
  //draw a letter (light color) to represent and average intensity
  //an average intensity (0-255);
  fill(255);

  if (avg > 200) {
    text("&", x, y);
  }

  else if (avg > 140) {
    text("t", x, y);
  }

  else if (avg > 100) {
    text("c", x, y);
  }

  else if (avg > 40) {
    text(".", x, y);
  }
}

function draw() {
  image(pilot, 0, 0);
  loadPixels(); //load current version
  background(0);

  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let loc = (y * pilot.width + x) * 4; //loc = location
      let avg = avgPixel(loc);
      drawCharacter(x, y, avg);
    }
  }


  /* for (let i = 0; i < pixels.length; i += 4) {
    //Greyscale Filter
    let avg = avgPixel(i);
    pixels[i] = avg; //R
    pixels[i + 1] = avg; //G
    pixels[i + 2] = avg; //B

    //Brightening Filter
    let boost = map(mouseX, 0, width, -150, 150);
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 2] + boost;
    setPixelColor(i, r, g, b);
  } */




  /* updatePixels(); */ //update current version

}

function avgPixel(pos) {
  let sum = pixels[pos] + pixels[pos + 1] + pixels[pos + 2];
  return sum / 3;
}

function setPixelColor(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}