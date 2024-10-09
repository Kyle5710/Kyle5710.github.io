// Drawing with Nested Loops
// Kyle MacLean
// October 9, 2024


function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
  for (let x = 0; x <= width; x += 40) {
    circle(x, 0, 20);
    line(x, 0, mouseX, mouseY);
  }

  for (let x = 0; x <= width; x += 40) {
    circle(x, height, 20);
    line(x, height, mouseX, mouseY);
  }

  for (let y = 0; y <= height; y += 40) {
    circle(0, y, 20);
    line(0, y, mouseX, mouseY);
  }

  for (let y = 0; y <= height; y += 40) {
    circle(height, y, 20);
    line(height, y, mouseX, mouseY);
  }
}

