// Function to handle mouse movement event
function handleMouseMove(e) {
  const background = document.getElementById('background');
  const xPos = e.clientX / window.innerWidth * 100;
  const yPos = e.clientY / window.innerHeight * 100;
  background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #3b3b3b, #A2BDC5,  #cecece)`;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', handleMouseMove);

// Function to handle device orientation event
function handleOrientation(event) {
  const background = document.getElementById('background');
  if (!background) return; // Check if background element exists
  const gamma = event.gamma; // Get the gamma value (tilt from left to right)
  const beta = event.beta;   // Get the beta value (tilt from front to back)

  // Normalize gamma and beta values to be in the range [0, 100] based on screen dimensions
  const xPos = (gamma + 100) / 250 * window.innerWidth;
  const yPos = (beta + 100) / 250 * window.innerHeight;

  // Apply the gradient with the adjusted position
  background.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, #3b3b3b, #A2BDC5,  #cecece)`;
}

// Add event listener for device orientation
window.addEventListener('deviceorientation', handleOrientation);
