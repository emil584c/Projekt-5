let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch

// Image List
images[0] = "images/Hydrovertic-system-1.jpg";
images[1] = "images/Hydrovertic-system-2.jpg";
images[2] = "images/Hydrovertic-system-3.jpg";
images[3] = "images/Hydrovertic-system-4.jpg";

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



