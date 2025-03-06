let pattern = ' CALL FOR WORKSHOPS  ';

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
    noStroke();
}

function draw() {
  background(255); // White background

  const cols = 80;
  const rows = 30;
  const cellWidth = width / cols;
  const cellHeight = height / rows;

  // Continuous time progression
  const loopDuration = 10000; // 10 seconds
  const t = millis()/loopDuration; // Normalized time [0,1]

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const o = sin(y * x * sin(t) * 0.003 + y * 0.01 + t) * 20;
      const i = round(abs(x + y + o)) % pattern.length;
      
      // Calculate exact position
      let posX = x * cellWidth + cellWidth / 2;
      let posY = y * cellHeight + cellHeight / 2;
      
      // Apply per-letter gradient based on exact position
      textSize(10)
      fill(getGradientColor(posY));
      text(pattern[i], posX, posY);
    }
  }
  fill(0,0,0,200);
  textSize(30)
  rect(0, 120, width,60);
  fill(255);
  text("CALL FOR WORKSHOPS", width/2, height/2);
}

function getGradientColor(y) {
    let color1 = color(255, 105, 180);
    let color2 = color(0, 255, 255);
    let color3 = color(147, 112, 219);

    let inter = map(y, 0, height, 0, 1);
    if (inter < 0.5) {
        return lerpColor(color1, color2, inter * 2);
    } else {
        return lerpColor(color2, color3, (inter - 0.5) * 2);
    }
}