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



// You can adjust the rate of hue shift by changing this variable
const hueShiftSpeed = 5; // 1 degree per frame

function updateHue() {
  const root = document.documentElement;
  let currentHue = parseFloat(getComputedStyle(root).getPropertyValue('--hue-start'));
  currentHue = (currentHue + hueShiftSpeed) % 360; // Update hue value correctly
  root.style.setProperty('--hue-start', currentHue);
  
  // Update the second color in the radial gradient
  root.style.setProperty('--color2', `hsl(${currentHue}, 100%, 50%)`);

  requestAnimationFrame(updateHue);
}

updateHue();