document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('backgroundAudio');
    // Check if the backgroundAudio element exists
    if (!backgroundAudio) {
        console.error("backgroundAudio element not found");
        return;
    }
    // Lower the background audio volume (0.2 is 20% volume)
    backgroundAudio.volume = 0.5;
});