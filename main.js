// Function to handle mouse movement event
function handleMouseMove(e) {
  const background = document.getElementById('background');
  const xPos = e.clientX / window.innerWidth * 100;
  const yPos = e.clientY / window.innerHeight * 100;
  background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #cecece, #3b3b3b)`;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', handleMouseMove);

function handleOrientation(event) {
  const background = document.querySelector('.background');
  if (!background) return; // Check if background element exists
  const gamma = event.gamma; // Get the gamma value (tilt from left to right)
  const beta = event.beta;   // Get the beta value (tilt from front to back)

  // Normalize gamma and beta values to be in the range [0, 100] based on screen dimensions
  const xPos = (gamma + 90) / 250 * window.innerWidth;
  const yPos = (beta + 90) / 250 * window.innerHeight;

  // Apply the gradient with the adjusted position
  background.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, #cecece, #3b3b3b)`;
}

window.addEventListener('deviceorientation', handleOrientation);
