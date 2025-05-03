// Default settings for the banner
const defaultSettings = {
    pattern: '  ACADIA 2025 MIAMI  ',
    width: 600,
    height: 300,
    cols: 80,
    rows: 30,
    textSize: 10,
    frameRate: 60,
    loopDuration: 10000,
    waveAmplitude: 20,
    waveFrequency: 0.003,
    waveSpeed: 0.01,
    gradientColors: {
        color1: [255, 105, 180],
        color2: [0, 255, 255],
        color3: [147, 112, 219]
    },
    overlayText: {
        text: "COMPUTING FOR RESILIENCE",
        size: 30,
        y: 150
    }
};

// Create a new banner instance
function createBanner(containerId, customSettings = {}) {
    const settings = { ...defaultSettings, ...customSettings };

    return function(p) {
        p.setup = function() {
            let container = document.getElementById(containerId);
            if (!container) {
                console.error(`Error: #${containerId} not found`);
                return;
            }

            let canvas = p.createCanvas(settings.width, settings.height);
            canvas.parent(container);

            p.frameRate(settings.frameRate);
            p.textSize(settings.textSize);
            p.textAlign(p.CENTER, p.CENTER);
            p.noStroke();
        };

        p.draw = function() {
            p.background(255);

            const cellWidth = p.width / settings.cols;
            const cellHeight = p.height / settings.rows;
            const t = p.millis() / settings.loopDuration;

            for (let y = 0; y < settings.rows; y++) {
                for (let x = 0; x < settings.cols; x++) {
                    const o = p.sin(y * x * p.sin(t) * settings.waveFrequency + y * settings.waveSpeed + t) * settings.waveAmplitude;
                    const i = p.round(p.abs(x + y + o)) % settings.pattern.length;
                    
                    let posX = x * cellWidth + cellWidth / 2;
                    let posY = y * cellHeight + cellHeight / 2;
                    
                    p.textSize(settings.textSize);
                    p.fill(getGradientColor(p, posY));
                    p.text(settings.pattern[i], posX, posY);
                }
            }

            // Draw overlay text if provided
            if (settings.overlayText) {
                p.fill(0, 0, 0, 125);
                p.textSize(settings.overlayText.size);
                p.rect(0, settings.overlayText.y - 30, p.width, 60);
                p.fill(255);
                p.text(settings.overlayText.text, p.width/2, settings.overlayText.y);
            }
        };

        function getGradientColor(p, y) {
            let color1 = p.color(...settings.gradientColors.color1);
            let color2 = p.color(...settings.gradientColors.color2);
            let color3 = p.color(...settings.gradientColors.color3);

            let inter = p.map(y, 0, p.height, 0, 1);
            if (inter < 0.5) {
                return p.lerpColor(color1, color2, inter * 2);
            } else {
                return p.lerpColor(color2, color3, (inter - 0.5) * 2);
            }
        }
    };
}

// Export the createBanner function
export { createBanner };