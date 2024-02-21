const images = ['/img/1.jpg', '/img/2.jpg']; // Array of image paths
  let currentIndex = 1; // Index of the current image
  
  const backgroundElement = document.querySelector('.morphing-bg');

  function morphBackground() {
    // Change the background image style directly
    backgroundElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Increment the index (looping back to the start if necessary)
    currentIndex = (currentIndex + 1) % images.length;
  }

 