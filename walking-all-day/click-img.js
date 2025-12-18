let img;
let images = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0)
}

function mousePressed() {
  img = createImg('https://cdn.glitch.global/3a79c03b-dc2a-4249-882c-cb3618ac2202/DSC00206.JPG?v=1709096365430')
  img.position(mouseX, mouseY)
  img.size(100, 170)
  
  images.push(img);
  
  // Set a timer to remove all images after 3 seconds
  setTimeout(() => {
    for (let i = 0; i < images.length; i++) {
      images[i].remove();
    }
    // Clear the array
    images = [];
  }, 2000); // 3000 milliseconds = 3 seconds
}