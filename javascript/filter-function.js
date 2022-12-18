
const infoBox = document.getElementById("info-box")
const hydroponiBox = document.querySelectorAll(".hydroponi-box");

let boxes = Array.prototype.map.call(hydroponiBox, function(el) {
    return el;
});


boxes.forEach(buttonText => {
    buttonText.addEventListener('click', function handleClick(event) {
      if(infoBox.style.height = "0px"){
        infoBox.style.height ="fit-content";
        infoBox.style.padding = "2rem"; 
      }
    });
});






let x, i;
x = document.getElementsByClassName("filterDiv");

filterSelection("all")
function filterSelection(c) {
 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    let i, arr1, arr2;
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
const btnHydroponiContent = document.getElementById("hydroponi-content");
let btns = btnHydroponiContent.getElementsByClassName("hydroponi-box");

console.log(btns)

// Add active class to the current control button (highlight it)
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if(this.style.display = "flex"){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    }
  });
}