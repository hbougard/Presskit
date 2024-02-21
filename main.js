document.addEventListener('mousemove', (e) => {
    const background = document.getElementById('background');
    const xPos = e.clientX / window.innerWidth * 100;
    const yPos = e.clientY / window.innerHeight * 100;
    background.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #cecece, #3b3b3b)`;
  });
  