import { createBanner } from './animation.js';

// Get parameters from the global config
const config = window.bannerConfig || {};
const pattern = config.pattern || '  ACADIA 2025 MIAMI  ';
const overlayText = config.overlayText || 'COMPUTING FOR RESILIENCE';
const textsize = Number(config.textsize) || 30;  // Convert to number
const height = Number(config.height) || 300;  // Convert to number
const width = Number(config.width) || 600;  // Convert to number

// Create the banner instance with custom settings
const banner = createBanner('p5-container', {
    pattern: pattern,
    width: width,
    height: height,
    cols: Math.floor(width / 13.5), // Adjust columns based on width (13.5px per column)
    rows: Math.floor(height / 10), // Adjust rows based on height
    textSize: Math.floor(height / 30), // Scale text size based on height
    frameRate: 60,
    loopDuration: 10000,
    waveAmplitude: Math.floor(height / 15), // Scale wave amplitude based on height
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
        y: height / 2
    }
});

// Initialize p5.js with our banner
new p5(banner); 