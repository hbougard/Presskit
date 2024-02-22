// Function to handle mouse movement event
function handleMouseMove(e) {
  const background = document.getElementById('background');
  const xPos = e.clientX / window.innerWidth * 100;
  const yPos = e.clientY / window.innerHeight * 100;
  background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #3b3b3b, #A2BDC5,  #cecece)`;
}

// Add event listener for mouse movement
document.addEventListener('mousemove', handleMouseMove);

function handleOrientation(event) {
  const background = document.getElementById('background');
  if (!background) return; // Check if background element exists

  const gamma = event.gamma; // Get the gamma value (tilt from left to right)
  const beta = event.beta;   // Get the beta value (tilt from front to back)

  // Normalize gamma and beta values to be in the range [-1, 1]
  const gammaNormalized = (gamma + 90) / 180; // Range from -90 to 90 to [0, 1]
  const betaNormalized = (beta + 90) / 180;   // Range from -90 to 90 to [0, 1]

  // Adjust the normalized values to ensure neutral position is centered
  const xPos = (gammaNormalized - 0.5) * window.innerWidth;
  const yPos = (betaNormalized - 0.5) * window.innerHeight;

  // Apply the changes to the position of the background element
  background.style.left = xPos + 'px';
  background.style.top = yPos + 'px';
}


// Add event listener for device orientation
window.addEventListener('deviceorientation', handleOrientation);
