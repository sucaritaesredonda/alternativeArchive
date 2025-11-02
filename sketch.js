let texts = [];
let text_size = 50;
var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  select('canvas').addClass('p5Canvas'); 
  textSize(text_size);
  textAlign(CENTER, CENTER);
  fill(250);
  stroke(0);
  strokeWeight(2);
    let canvases = selectAll('canvas');
  let p5canvas = canvases[canvases.length - 1]; // the last one is p5's
  p5canvas.addClass('p5Canvas');
}

function draw() {
  clear(); // transparent clear instead of background()

  
  // Display and move all text elements
  for (let i = 0; i < texts.length; i++) {
    texts[i][1] -= 1; // move upwards
    text(texts[i][0], texts[i][2], texts[i][1]);
  }
}

function mouseMoved() {
  // Add a new text element when the mouse moves
  texts.push(["Not dead but not live", mouseY, mouseX]);
}

function mousePressed() {
  // Clear all text elements when the mouse is pressed
  texts = [];
  
  // Change fill color for new texts
  let text_color = color(random(255), random(255), random(255));
  fill(text_color);
}