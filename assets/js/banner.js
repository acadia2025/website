import { createBanner } from './animation.js';

// Get parameters from the global config
const config = window.bannerConfig || {};
const pattern = config.pattern || '  ACADIA 2025 MIAMI  ';
const overlayText = config.overlayText || 'COMPUTING FOR RESILIENCE';
const textsize = Number(config.textsize) || 30;  // Convert to number

// Create the banner instance with custom settings
const banner = createBanner('p5-container', {
    pattern: pattern,
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
        text: overlayText,
        size: textsize,
        y: 150
    }
});

// Initialize p5.js with our banner
new p5(banner); 