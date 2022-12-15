let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch



// Image List
images[0] = "images/vertical-system.webp";
images[1] = "images/smart-agriculture-iot-with-hand-planting-tree-background.webp";
images[2] = "images/Verdensmaal-ikon-12.webp";
images[3] = "images/forside-test-billede.webp";

console.log(images)

// Change Image
function slideImg() {
    document.slideshow.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("slideImg()", time);
}

// Run function when page loads
window.onload = slideImg;



