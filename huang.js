
let counter = 0;

function setup() {
  createCanvas(800, 800);
  background(0);

  frameRate(2);
}

function draw() {
  // stroke(random(50), random(100));
  // strokeWeight(2);
  noStroke()
  fill(random(60, 100), random(70, 150), random(150, 220), random(50, 100));
  let y = sin(counter) * 100;
  let x = cos(counter) * 100; // control the spacing & size
  ellipse(x * random(0.95, 1) + 400, y * random(0.95, 1) + 400, 40, 40);
  // Attach text onto the circle
  fill(255); // text color
  textAlign(CENTER, CENTER); // center align text
  let textX = x * random(0.95, 1) + 300;
  let textY = y * random(0.95, 1) + 300;
  text("一個眼神", textX, textY); 
  
  counter += 0.25;
}
