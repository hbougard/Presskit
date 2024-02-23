const sticker = document.querySelector('.sticker');
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 10;
let rotation = 0;
let rotationSpeed = 0.1;

function animateSticker() {
    requestAnimationFrame(animateSticker);
    sticker.style.left = x + 'px';
    sticker.style.top = y + 'px';
    sticker.style.transform = `rotate(${rotation}deg)`;

    if (x + sticker.offsetWidth > window.innerWidth + window.pageXOffset || x < window.pageXOffset) {
        dx = -dx;
    }
    if (y + sticker.offsetHeight > window.innerHeight + window.pageYOffset || y < window.pageYOffset) {
        dy = -dy;
    }
    

    if (rotation >= 25 || rotation <= -25) {
        rotationSpeed = -rotationSpeed;
    }
    rotation += rotationSpeed;

    x += dx;
    y += dy;
}

animateSticker();
