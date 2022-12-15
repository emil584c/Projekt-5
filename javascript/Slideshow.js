let i = 0;
let images = [];
let time = 3000;	

images[0] = "images/Hydrovertic-system-1.jpg";
images[1] = "images/Hydrovertic-system-4.jpg";
images[2] = "images/Hydrovertic-system-7.jpg";
images[3] = "images/Hydrovertic-system-5.jpg";

console.log(images)

function slideImg() {
    document.slideshow.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImg()", time);
}

window.onload = slideImg;



