let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  frameRate(15);
}

function draw() {
  // stroke(random(50), random(100));
  // strokeWeight(2);
  noStroke()
  fill(random(60, 100), random(70, 150), random(150, 220), random(50, 100));
  let y = sin(counter) * 70;
  let x = cos(counter) * 70;
  // ellipse(x * random(0.95, 1) + 400, y * random(0.95, 1) + 400, 40, 40);
  // Attach text onto the circle
  fill(255); // text color
  textAlign(CENTER, CENTER); // center align text
  let textX = x * random(0.95, 1) + 400;
  let textY = y * random(0.95, 1) + 400;
  circle(mouseX, mouseY, 50);
  
  counter += 0.25;
}