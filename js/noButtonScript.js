document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    console.log(noButton);  // Should log the button element
    if (!noButton) {
        console.error("noButton not found");
        return;
    }
    noButton.addEventListener('mouseover', () => {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxX = windowWidth - buttonWidth;
        const maxY = windowHeight - buttonHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});