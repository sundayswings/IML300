function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("pointer-events", "none");
}

function draw() {
  // background(255);
  analogueBG(8);
  frameRate(20);
}

function analogueBG(size){
  noStroke()
  fill(random(100), random(150, 255))
  circle(random(width), random(height), random(size));
}