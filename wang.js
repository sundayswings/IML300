let numParticles = 10;
let particles = [];
let names = [
  "Wáng",
  "Wong",
  "Ong",
  "Heng",
  "Bong",
  "Vong",
  "Vương",
  "Vang",
  "Ongkiko",
  "Ongkosandjojo/Raja/Surya",
  "Wongkusonkij",
];
let nameObjects = [];
let isDragging = false;

// Define a custom color palette
let colorPalette = [
  [0, 0, 0],     // Black
  [215, 22, 45],   // Red
];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("pointer-events", "none");
}

function draw() {
  background(255);

  // Display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  // Display names
  for (let i = 0; i < nameObjects.length; i++) {
    nameObjects[i].update();
    nameObjects[i].show();
    if (nameObjects[i].y > height) {
      nameObjects.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = random(100, 255); // Randomize alpha value
    this.size = random(5, 15); // Randomize particle size
    this.color = colorPalette[int(random(colorPalette.length))]; // Randomize particle color from palette
    this.fadeSpeed = random(1, 3); // Randomize fading speed
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.fadeSpeed;
  }

  show() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}




class Name {
  constructor(name) {
    this.name = name;
    this.x = -100; // Start from the left side
    this.y = random(height) + 20; // Random initial y position
    this.speed = random(1, 3);
    this.alpha = 30;
  }

  update() {
    this.x += this.speed; // Move towards the right side
    this.y += random(-1, 1); // Add some random vertical movement
    this.alpha += 1;
  }

  show() {
    textAlign(CENTER);
    textSize(random(25, 25.1)); // Adjust the font size as needed
    textFont("Georgia");
    fill(0, this.alpha);
    text(this.name, this.x, this.y);
  }
}

function emitParticles(x, y) {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(x, y));
  }
}

$(document).ready(function () {
  $("#wang").draggable({
    start: function () {
      isDragging = true;
    },
    stop: function () {
      isDragging = false;
      setTimeout(function () {
        let addedNames = [];
        while (addedNames.length < 10) {
          // avoid repetition
          let randomName = names[Math.floor(Math.random() * names.length)];
          if (!addedNames.includes(randomName)) {
            addedNames.push(randomName);
            nameObjects.push(new Name(randomName));
          }
        }
      }, 800);
      
      // to display the info on the right-hand side
      setTimeout(function () {
        $("#right-part").css("display", "block");
      }, 4000);
      
    },
    drag: function (event, ui) {
      if (isDragging) {
        let wangPos = document.getElementById("wang").getBoundingClientRect();
        let x = mouseX - wangPos.width / 8;
        let y = mouseY + wangPos.height / 7;
        emitParticles(x, y);
      }
    },
  });
});


document.getElementById('second-part').style.display = 'block';