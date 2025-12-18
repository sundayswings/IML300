let allNames = ["Chén", "Chan", "Tan", "Tang", "Chin", "Ding", "Trần", "Cheng", "Jin", "Tantoco", "Tantrakul", "Chendrawan/Tandiono/Sutanto"];
let usedNames = [];

let allLanguages = ["mandarin", "cantonese", "hokkien", "teochew", "hakka", "eastern min", "vietnamese", "hmong", "korean", "han surname in hokkien combined with first name amongst chinese philippino", "de-sinicized, thaified names", "de-sinicized, indonesianized names due to anti-chinese legislations/violences"];


let fonts = [];
let currentFont;

function preload() {
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/5yearsoldfont.ttf?v=1713492723331'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/A%20Sensible%20Armadillo.ttf?v=1713492726256'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/AlanisHand.ttf?v=1713492728860'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/attack%20of%20the%20cucumbers.ttf?v=1713492731183'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/goodfoot.ttf?v=1713492734081'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/rabiohead.ttf?v=1713492736474'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/tomhand.ttf?v=1713492739190'));
  fonts.push(loadFont('https://cdn.glitch.global/6b0f94bc-510d-432f-9896-1187d4b4ffcb/tommys.ttf?v=1713492741412'));
  
  console.log("Fonts loaded:", fonts);
}
  
let scrollArrowVisible = false;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
}

function draw() {

}

function mousePressed() {
  if (scrollArrowVisible) {
    return;
  }
  
  if (usedNames.length < allNames.length) {
    let index = floor(random(allNames.length)); // Generate a random index
    let name = allNames[index];
    let language = allLanguages[index];

    // Check if the name has already been used
    while (usedNames.includes(name)) {
      index = floor(random(allNames.length));
      name = allNames[index];
      language = allLanguages[index];
    }

    // Add the name to the used names array
    usedNames.push(name);

    // Create and position the <h1> element
    let nameElement = createElement('h1', name);
    nameElement.position(mouseX + 30, mouseY - 80);
    // enforce randomized fonts
    // chooseRandomFont();
    // nameElement.style('background-color', 'white')
    nameElement.style('font-family', 'monaco'); // monaco font
    
    // also! create h3 tags to display corresponding info
    let nameInfo = createElement('p', language);
    nameInfo.position(mouseX + 33, mouseY - 96);
    nameInfo.style('background-color', 'rgba(243, 53, 85, 0.3)');
    nameInfo.style('padding', '2px');
    // nameInfo.style('display', 'none');
  
  } else {
    alert("there are much more variations not included here!");
    // document.getElementById('scroll-arrow').style.display = 'block';
    document.getElementById('second-part').style.display = 'block';
    scrollArrowVisible = true;
  }
}

function chooseRandomFont() {
  currentFont = random(fonts);
}
