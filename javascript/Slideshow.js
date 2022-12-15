var images = ["images\vertical-system.webp", "images\smart-agriculture-iot-with-hand-planting-tree-background.webp", "images\Verdensmaal-ikon-12.webp", "images\forside-test-billede.webp"]
var i = 0;


function slideshow() {
    document.getElementById('slideshow').src = images[i];

    if (i < images.length - 1) {
        i++
    }

    else {
        i = 0;
    }

    setTimeout("slideshow()",2500);
}