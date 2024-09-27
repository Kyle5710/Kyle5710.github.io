// Perlin Noise Demo
// Kyle MacLean
// September 27, 2024

//PERLIN CIRCLE ON THE LEFT RANDOM CIRCLE ON THE RIGHT

// random() vs noise()
let cTime = 5; //current "noise" time
let cInterval = 0.02; //how fast we move 
                   //down the noise graph
                   //small jump = little change
                   //big jump = greater change but chance for little change


function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(2); 
}

function draw() {
  background(220);

  stroke("blue");
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);

  //draw with random()
  randomCircle();

  //draw with noise()
  perlinCircle();

  staircase();
}

function randomCircle() {
  //draw a circle that uses random()
  //for unpredicatable (later, color)

  let cSize = random(1, 255);
  fill(cSize, 255-cSize, cSize/2); //get colors from random values of cSize

  textSize(50);
  textAlign(CENTER, CENTER);

  circle(width * 0.75, height / 2, cSize);
  text(round(cSize), width*0.75, height/2); //.75 is 75% away across
}

function perlinCircle(){
  //draw a circle using noise() with
  // unpredictable size (later, color)
  let cSize = noise(cTime); //0-1
  cSize = map(cSize, 0, 1, 1, 255);

  //find values for rgb for fill()
  let r = noise(cTime); //0-1
  let g = noise(cTime + 2); //0-1
  let b = noise(cTime + 5); //0-1

  r = map(r, 0, 1, 0, 255); //scale values to 1-255
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);

  fill(r, g, b); //fill the color
  circle(width * 0.25, height / 2, cSize); //.25 is 25% a way across
  text(round(cSize), width*0.25, height/2);
  
  cTime += cInterval; //increment the time for new values
}

function staircase(){
  //draw a staircase using loops
  randomSeed(2); //can stabilize numbers
  for(let x = 0; x < width; x += 20){
    //20... rectangle spacing / rectWidth
    fill(0);
    strokeWeight(0);
    let rectHeight = random(50, 500);
    rect(x, height, 20, -rectHeight);
  }

}