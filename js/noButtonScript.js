document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const mainImage = document.getElementById('mainImage');
    let hoverCount = 0;
    
    if (!noButton) {
        console.error("noButton not found");
        return;
    }

    // Define the image URLs (must declare the variables before the thresholds array)
    const originalImg = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJwMGx6YXQzc2o1aHE3cnN0YWplaHg4ZXN6eHQ3NzVudXZvYmxuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9M4HFU1bgot1ylXcAA/giphy.gif";
    const secondImg = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1vMXVvZW51bzRybWg1dGVrM3pkYWNjbmYzeGJ6bTF0N2t0M2dtOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GMJNWpteXtGKMF5iZk/giphy.gif";
    const thirdImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnpsbzd0cmF0Mmg3Mm1haWpjYWlqMmN5d2xyMjZhMHZuZWI3MjloNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jAgkzKLtBV9DZLTQYp/giphy.gif";
    const fourthImg = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJhYTFtd292c3VtdmF2ZDN1cHlkNnh5ZHV3b2dwNnNoMHd2bnhvdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3buMuWgfKTxUbhu0ZZ/giphy.gif";
    const fifthImg = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWQ1cmRnb3RsanZlN2p3czZjcXU2NmhmejVqam84a2ZqcmYxdzc0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IE6gWQslVdIjv12pqP/giphy.gif";
    const sixthImg = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JnazBieXdsMjJleGIwejVocXBwdG5ndTdvdmcxd253MmF6MWV5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mONWQQeVZLFkw1fo80/giphy.gif";
    const seventhImg = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExanlyN2d5MnE4Y3RobG15ZTlkZ3VieDNiMDgzNzd0NmVyNnRnZmo4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VW3NjsftrG7rxz68WL/giphy.gif";
    const eighthImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWtuYWU0bzJtaXBoNnNsbTJ6Mjh1MmFxNW5naGVuaGg5c2hrMHFqciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L4rr1biuCsjyqxsJkC/giphy.gif";
    const ninthImg = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHl4Zjlsb214aHI1bTF1c2Z4ZHI5d3hqOXN3YWZncGgyaXY2MmlzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fmWeP9PyyAeEmH0zZb/giphy.gif";

    // Create an ordered array of thresholds (ascending order)
    // When hoverCount >= count, set imgPath to the corresponding image.
    const thresholds = [
        { count: 8, imgPath: secondImg }, // count is the number of times the button is hovered
        { count: 12, imgPath: thirdImg },
        { count: 16, imgPath: fourthImg },
        { count: 20, imgPath: fifthImg },
        { count: 24, imgPath: sixthImg },
        { count: 28, imgPath: seventhImg },
        { count: 32, imgPath: eighthImg },
        { count: 36, imgPath: ninthImg }
        // Add more thresholds here as needed by replicating the line above.
    ];

    // Add a mouseover event listener to the noButton
    noButton.addEventListener('mouseover', () => {
        hoverCount++;

        // Randomize the button position
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

        // Determine the new image based on the threshold values
        if (mainImage) {
            let newImg = originalImg;
            // Iterate through the thresholds array to find the first threshold that is met
            thresholds.forEach(threshold => {
                if (hoverCount >= threshold.count) {
                    newImg = threshold.imgPath;
                }
            });
            // Update the mainImage src only if it is different from the current source.
            if (mainImage.src !== newImg) {
                mainImage.src = newImg;
            }
        }
    });
});