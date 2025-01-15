/* // Function to shuffle an array
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
  }); */

  // Function to shuffle an array
// Function to shuffle an array
/* function shuffle(array) {
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
      const prioritizedTitle = "Luis Pacheco"; 
      const prioritizedItem = items.find(item => {
        const title = item.querySelector("a").getAttribute("title");
        return title === prioritizedTitle;
      });
      const remainingItems = items.filter(item => item !== prioritizedItem);
      const shuffledItems = shuffle(remainingItems);
  
      if (prioritizedItem) {
        const topThree = shuffledItems.slice(0, 2); 
        const randomIndex = Math.floor(Math.random() * 3); 
        topThree.splice(randomIndex, 0, prioritizedItem); 
  

        const updatedItems = [...topThree, ...shuffledItems.slice(2)];
  
        updatedItems.forEach(item => gallery.appendChild(item));
      } else {
        shuffledItems.forEach(item => gallery.appendChild(item));
      }
    });
  }); */