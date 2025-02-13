document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    if (!yesButton) {
        console.error("yesButton not found");
        return;
    }

    yesButton.addEventListener('click', () => {
        // Trigger confetti burst from the top of the screen
        confetti({
            particleCount: 250,
            spread: 5000,
            origin: { y: 0.6 }
        });
    });
});