
    // Array of images
    const images = [
        'IMAGES/bg.jpg', // Your initial image
        'IMAGES/Untitled-1.png', // Second image
        'IMAGES/Untitled-2.png', // Third image
        'IMAGES/Untitled.png', // Third image
        // Add as many images as you like
    ];
    let currentIndex = 0; // Start with the first image
    
    function changeBackgroundImage() {
        // Get the picture panel element
        const picturePanel = document.getElementById('picture-panel');
        
        // Update the background image
        picturePanel.style.backgroundImage = `url('${images[currentIndex]}')`;
        
        // Move to the next image, looping back to the first at the end
        currentIndex = (currentIndex + 1) % images.length;
        
        // Set to change the image every 5 seconds (5000 milliseconds)
        setTimeout(changeBackgroundImage, 5000);
    }
    
    // Start the background image rotation when the page loads
    window.onload = changeBackgroundImage;

    // GRID 1
    document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-1"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/best-w.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });

    // GRID 2
    document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-2"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/art-2.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });
    
    // GRID 3
    document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-3"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/master-2.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });
     // GRID 4
     document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-4"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/connection-2.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });
     // GRID 5
     document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-5"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/tracks-1.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });
     // GRID 6
     document.addEventListener("DOMContentLoaded", function() {
        var grid2 = document.querySelector(".grid-6"); // Target the second grid by its class
        var originalImageSrc = grid2.querySelector("img").src;
        var newImageSrc = "IMAGES/support-1.png"; // Change this to the path of your second image
    
        grid2.addEventListener("mouseover", function() {
            grid2.querySelector("img").src = newImageSrc; // Change the image source when hovering
        });
    
        grid2.addEventListener("mouseout", function() {
            grid2.querySelector("img").src = originalImageSrc; // Revert to the original image source when not hovering
        });
    });

    