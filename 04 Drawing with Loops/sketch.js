// Drawing with loops
// Kyle MacLean
// September 19, 2024

function setup(){
  createCanvas(windowWidth, windowHeight);
  
}

function draw(){
  //screen is updated at end of draw()
  myBackground();
  myForeground();
}


function myBackground(){
  //use a loop to draw a gradient background
  let rectHeight = 1;
  noStroke();
  for(let y = 0; y < height; y += rectHeight){
    let value = map(y, 0, width, 0, 255);
    fill(value, 255-value, 255-value);
    rect(0, y, width, rectHeight);
  }
}

function myForeground(){
  //use FOR / WHILE loops to draw on the canvas

  //loop var   ;  condition   ;   var modification
  for(let x = 0; x < mouseX; x = x + 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  //random seed
  randomSeed(744);

  //draw some stars
  let starCount = 0;
  fill(255, 0, 0);
  while(starCount < 100){
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 50);

    starCount++;
  }
}