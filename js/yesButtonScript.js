document.addEventListener('DOMContentLoaded', () => {
    let fileDownloaded = false; // Flag to ensure redirect is triggered only once

    const yesButton = document.getElementById('yesButton');
    if (!yesButton) {
        console.error("yesButton not found");
        return;
    }

    yesButton.addEventListener('click', () => {
        // On second click, if the button text is "CLICK ME AGAIN" and file hasn't been downloaded yet:
        if (yesButton.textContent === "ARE YOUU SUREEE?!" && !fileDownloaded) {
            const redirectUrl = "https://drive.google.com/file/d/1th-43jvTWaRHCTcVhWlKFTIYxi5p2Dcv/view?usp=sharing";
            window.open(redirectUrl, "_blank");
            fileDownloaded = true;
            return;
        }

        // Otherwise, perform initial actions on the first click:
        confetti({
            particleCount: 250,
            spread: 5000,
            origin: { y: 0.6 }
        });

        // Replace the main image with the specified GIF
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB4MzRxN3Q0dmtqY2pjZm14M2MwNHVkbmdiaDAzN2ZtNzJ6Y2RoNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif";
        } else {
            console.error("mainImage element not found");
        }

        // Update subText with the specified text
        const subText = document.getElementById('subText');
        if (subText) {
            subText.textContent = "YAAAAAAAAAAAYYYY!!! @cyiver.t";
        } else {
            console.error("subText element not found");
        }

        // Hide the noButton
        const noButton = document.getElementById('noButton');
        if (noButton) {
            noButton.style.display = "none";
        } else {
            console.error("noButton element not found");
        }

        // Change yesButton text to prompt a re-click for redirection
        yesButton.textContent = "ARE YOUU SUREEE?!";
    });
});