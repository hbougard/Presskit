document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                img.requestFullscreen().catch(err => {
                    console.error('Error attempting to enable full-screen mode:', err.message);
                });
            } else {
                document.exitFullscreen();
            }
        });
    });
});


// Function to enter fullscreen mode
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// Function to exit fullscreen mode
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}

// Check if the device has a smaller screen (mobile device)
if (window.matchMedia("(max-width: 768px)").matches) {
    // Add event listener to the gallery images
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', openFullscreen);
    });
} else {
    // If not a mobile device, hide the exit fullscreen button
    document.getElementById('exitFullscreenButton').style.display = 'none';
}
