/** 
  The following code is credited to professor Q (Qianqian Ye)
**/

var Engine = Matter.Engine,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

let engine;
let world;
let circles = [];
let grounds = [];
let mConstraint;

// Array of surnames
let names = ["Zhōu", "Chou", "Chow", "Chew", "Chiu", "Tsiu", "Chau", "Jiu", "Zhiu", "Chu", "Châu", "Sae-Chew", "Saechio", "Saeziou", "Ciu", "Tjoe", "Tjokrowidijokso", "Juanda", "Juano", "Cokrowijikso"];

let canvas;
let sizes = [40, 60, 80];

let myFont;

function preload() {
  myFont = loadFont("https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/5yearsoldfont.ttf?v=1713492723331");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  grounds.push(new Boundary(0, height / 2, 10, height));
  grounds.push(new Boundary(width, height / 2, 10, height));
  grounds.push(new Boundary(200, 0, width, 10));
  grounds.push(new Boundary(200, height, width, 10));
  World.add(world, grounds);

  let mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  let options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

let count = 0;

function draw() {
  background(255);
  
  if (frameCount % 45 === 0) {
    print(++count);
    let size = random(sizes);
    circles.push(new Circle(width / 2, 80, size / 3));
  }
  
  Engine.update(engine);

  for (let circle of circles) {
    circle.show();
  }
  for (let ground of grounds) {
    ground.show();
  }
}

function mousePressed (){
  circles.push(new Circle(mouseX, mouseY, random(20, 60)));
}

class Circle {
  constructor(x, y, r) {
    let options = {
      friction: 0.6,
      restitution: 0.1,
    };
    // Randomly select a surname from the array
    let surname = random(names);
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.text = surname;
    this.font = "Courier";
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    textAlign(CENTER, CENTER);
    textSize(this.r); // Adjust text size based on circle radius
    fill(0);
    textFont(this.font);
    text(this.text, 0, 0); // Display text inside the circle
    pop();
  }
}

class Boundary {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.3,
      restitution: 0.6,
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    
  }
}
