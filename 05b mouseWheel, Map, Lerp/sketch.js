// mouseWheel, map, lerp
// Kyle MacLean
// September 25, 2024


let x, y, d = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; y = height / 2;
  noFill();
}

function draw() {
  //background(220);
  x = lerp(x, mouseX, 0.2);
  y = lerp(y, mouseY, 0.2);

  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  let b = map(x, 0, width, 255, 0);
  stroke(r, g, b);

  circle(x, y, d);
}

function mouseWheel(event) {
  print(event.delta);
  //negative: UP SCROLL
  //positive: DOWN SCROLL

  if (event.delta > 0) {
    d -= 10;
    if (d < 10) d = 10;
  }
  else {
    d += 10;
    if (d > 150) d = 150;
  }
}