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
  if (!background) return; // Verificar si existe el elemento de fondo

  const gamma = event.gamma; // Obtener el valor gamma (inclinación de izquierda a derecha)
  const beta = event.beta;   // Obtener el valor beta (inclinación de adelante hacia atrás)

  // Calcular las coordenadas de posición basadas en el tamaño de la pantalla
  const xPos = (gamma + 90) / 180 * window.innerWidth;
  const yPos = (beta + 90) / 180 * window.innerHeight;

  // Aplicar los cambios a la posición del elemento de fondo
  background.style.left = xPos + 'px';
  background.style.top = yPos + 'px';
}

// Add event listener for device orientation
window.addEventListener('deviceorientation', handleOrientation);
