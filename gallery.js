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


