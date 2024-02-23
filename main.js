

// Function to handle mouse movement event
function handleMouseMove(e) {
  const background = document.getElementById('background');
  const rect = background.getBoundingClientRect(); // Get the position of the background element
  const xPos = (e.clientX - rect.left) / rect.width * 100; // Calculate xPos relative to the background element
  const yPos = (e.clientY - rect.top) / rect.height * 100; // Calculate yPos relative to the background element
  background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(63,94,251,1) 0%, rgba(70,204,252,1) 18%, rgba(0,0,0,1) 35%)`;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', handleMouseMove);

// Function to handle device orientation event
function handleOrientation(event) {
  const background = document.getElementById('background');
  if (!background) return;
  const gamma = event.gamma;
  const beta = event.beta;
  const xPos = (gamma + 50) / 100 * window.innerWidth;
  const yPos = (beta + -40) / 100 * window.innerHeight; 
  background.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, rgba(63,94,251,1) 0%, rgba(70,204,252,1) 18%, rgba(0,0,0,1) 35%)`;
}

// Check if device orientation event is supported

  // Add event listener for device orientation
  window.addEventListener('deviceorientation', handleOrientation);

  // Fallback mechanism if device orientation is not supported
window.addEventListener("load", () => {
  const background = document.getElementById('background');
  if (!background) return; // Ensure the background element exists

  // Remove the event listener for device orientation
  window.removeEventListener('deviceorientation', handleOrientation);

  // Set a default gradient as fallback
  const defaultGradient = `radial-gradient(circle at 50% 50%, rgba(63,94,251,1) 0%, rgba(70,204,252,1) 18%, rgba(0,0,0,1) 35%)`;
  background.style.background = defaultGradient; // Set the default gradient
});

