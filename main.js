// Function to handle mouse movement event
function handleMouseMove(e) {
  const background = document.getElementById('background');
  const xPos = e.clientX / window.innerWidth * 100;
  const yPos = e.clientY / window.innerHeight * 100;
  background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%,  rgba(63,94,251,1) 0%, rgba(70,204,252,1) 18%, rgba(0,0,0,1) 35%)`;
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
  const xPos = (gamma + 47) / 100 * window.innerWidth;
  const yPos = (beta + 0) / 100 * window.innerHeight;

  // Apply the gradient with the adjusted position
  background.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px,  rgba(63,94,251,1) 0%, rgba(70,204,252,1) 18%, rgba(0,0,0,1) 35%)`;
}

// Add event listener for device orientation if supported
if ('DeviceOrientationEvent' in window) {
  window.addEventListener('deviceorientation', handleOrientation);
} else {
  // Fallback mechanism if device orientation is not supported
  console.log('Device orientation not supported.');
}


