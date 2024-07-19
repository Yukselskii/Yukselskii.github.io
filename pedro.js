document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-music');

    // Create a single button for play/pause
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Play';
    document.body.appendChild(toggleButton);

    // Add event listener to toggle play/pause
    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleButton.innerText = 'Pause';
        } else {
            audio.pause();
            toggleButton.innerText = 'Play';
        }
    });
});
