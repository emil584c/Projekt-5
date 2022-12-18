let i = 0;
let images = [];
let time = 3000;	

images[0] = "images/hydrovertic-system-1.jpg";
images[1] = "images/hydrovertic-system-4.jpg";
images[2] = "images/hydrovertic-system-7.jpg";
images[3] = "images/hydrovertic-system-5.jpg";

console.log(images)

function slideImg() {
    document.getElementById("slideshow").src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImg()", time);
}

window.onload = slideImg;



