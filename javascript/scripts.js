


// let moreText = document.getElementById("info-box-1");
// let box = document.getElementById("yes");
let mainText = document.getElementById("info-main-text")
let infoBox = document.getElementById("info-box")

// box.addEventListener("click", function folding(){ 
//     if(moreText.style.display = "none"){
//         infoBox.style.height ="250px";
//         mainText.style.display ="none";
//         moreText.style.opacity = "100";
//         moreText.style.display = "flex";
//     }
// });








// tilmeld afmeld
const tilmeldKnap = document.querySelectorAll(".hydroponi-box");


let values = Array.prototype.map.call(tilmeldKnap, function(el) {
    return el;
});

values.forEach(buttonText => {
    buttonText.addEventListener('click', function handleClick(event) {
        infoBox.style.height ="250px";
        mainText.style.display ="none";
    });
});

var x, i;
x = document.getElementsByClassName("filterDiv");

filterSelection("all")
function filterSelection(c) {
 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1); 
      }
    }
    element.className = arr1.join(" ");
  }

// Add active class to the current control button (highlight it)
var btnScrollmenu = document.getElementById("scrollmenu");
var btns = btnScrollmenu.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






// const observer = new IntersectionObserver ((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show-animation');
//         } 
//     });
// });


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));