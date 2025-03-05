let numLines = 30;
let amplitude = 50;
let frequency = 0.02;
let speed = 0.005;

function setup() {
    let container = document.getElementById('p5-container');
    if (!container) {
        console.error("Error: #p5-container not found");
        return;
    }

    let canvas = createCanvas(600, 300);
    canvas.parent(container); // Attach the canvas properly

    frameRate(60);
    textSize(10);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
}

function draw() {
  background(255);

  const loopDuration = 10000; // 10 seconds loop
  const t = millis() / loopDuration; // Normalized time [0,1]

  for (let i = 0; i < numLines; i++) {
    let yOffset = (height / numLines) * i;
    let wavePhase = i * 0.1; // Offset each line slightly
    drawWave(yOffset, wavePhase, t);
  }

  // Semi-transparent black rectangle for text background
  fill(0, 0, 0, 200);
  noStroke();
  rect(0, 125, width, 50);

  // Text styling and display
  fill(255);
  textSize(35);
  textAlign(CENTER, CENTER);
  text("WORKSHOPS", width / 2, height / 2);
}

function drawWave(yOffset, phase, t) {
  beginShape();
  for (let x = 0; x < width; x += 5) {
    let y = yOffset + sin(x * frequency + t * TWO_PI + phase) * amplitude * sin(t * TWO_PI);
    stroke(getGradientColor(y));
    vertex(x, y);
  }
  endShape();
}

// Function to create a Miami-inspired gradient color
function getGradientColor(y) {
  let color1 = color(255, 105, 180); // Hot pink
  let color2 = color(0, 255, 255);   // Cyan
  let color3 = color(147, 112, 219); // Medium purple

  let inter = map(y, 0, height, 0, 1);
  if (inter < 0.5) {
    return lerpColor(color1, color2, inter * 2);
  } else {
    return lerpColor(color2, color3, (inter - 0.5) * 2);
  }
}
