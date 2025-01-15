// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Randomize the order of <li> elements for each gallery
  document.addEventListener("DOMContentLoaded", () => {
    // Select all galleries with the class 'image-gallery'
    const galleries = document.querySelectorAll('.image-gallery');
  
    // Iterate through each gallery
    galleries.forEach(gallery => {
      const items = Array.from(gallery.children); // Get all <li> elements in the gallery
      const shuffledItems = shuffle(items); // Shuffle them
      shuffledItems.forEach(item => gallery.appendChild(item)); // Re-append in new order
    });
  });