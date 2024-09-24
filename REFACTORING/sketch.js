//Black and White Target

let size = 400

function setup(){
  createCanvas(400, 400);
  for(let i = 0; i < 9; i++){
    size -= 40
    ellipse(200, 200, size, size);
  }
}
