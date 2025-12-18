let characters = ["!", "发展", "经济"];
let numCharacters = 400;
let floatingCharacters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numCharacters; i++) {
    let character = characters[Math.floor(random(characters.length))];
    let x = random(width);
    let y = random(height);
    let speedX = 0;
    let speedY = 0;
    floatingCharacters.push({ character, x, y, speedX, speedY });
  }
}

function draw() {
  background(0, 0.9);
  for (let i = 0; i < floatingCharacters.length; i++) {
    let { character, x, y, speedX, speedY } = floatingCharacters[i];
    let targetX = mouseX + random(-10, 10);
    let targetY = mouseY + random(-10, 10);
    let dx = targetX - x;
    let dy = targetY - y;
    speedX = dx * 0.01;
    speedY = dy * 0.01;
    x += speedX;
    y += speedY;
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    floatingCharacters[i] = { character, x, y, speedX, speedY };
    fill(255);
    text(character, x, y);
  }
}
