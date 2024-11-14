// The Balloon Tree
// Kyle MacLean
// Novemeber 13, 2024
//

let scale = 15;
let seed;

function setup() {
  createCanvas(500, 500);
  background(255);
  seed = random(100);

}

function draw() {
  drawTree(width / 2, height * 0.9, 90, 6);
  randomSeed(seed);
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  //branch weight changed depending on depth
  strokeWeight(depth / 2);
  line(x1, y1, x2, y2);

}

function drawLeaf(x2, y2, depth) {
  //leaf properties
  fill(color(random(255), random(255), random(255)));
  strokeWeight(1.5);

  //draw leaf
  circle(x2, y2, random());
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale;     //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle)) * depth * scale;     //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth * 1.5);

    //draw leaves on branches with depth < 5
    if (depth < 5) {
      drawLeaf(x2, y2, depth);
    }

    //3-branch tree
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle - 18, depth - 1);
    drawTree(x2, y2, angle + 18, depth - 1);
  }
}

//create new var called userDepth to tell when to draw the leaves also fix drawLeaf