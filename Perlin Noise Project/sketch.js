// Perlin Noise Project
// Kyle MacLean
// October 1, 2024
// describe it here later

//global vars
let noiseVar = 10;
let rectHeight = 0;
let rectWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  generateTerrain();
}

function generateTerrain() {

  randomSeed(2);
  
  for (let x = 0; x < width; x += rectWidth) {
    rectHeight = noise(noiseVar); //0-1
    rectHeight = map(rectHeight, 0, 1, 0, height);

    rect(x, height, rectWidth, -rectHeight);
  }

}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    //

  }

  if(keyCode === RIGHT_ARROW){
    //

  }
}