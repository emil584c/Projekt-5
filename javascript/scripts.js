
// let moreText = document.getElementById("more");
// let box = document.getElementById("yes");
// let boxe = document.getElementById("hydroponiBox2")

// box.addEventListener("click", function folding(){ 
//     if(moreText.style.display = "none"){
//         moreText.style.display = "flex";
//         // box.style.height ="500px";
//         // box.style.width ="500px";
//         boxe.style.display ="flex"
//     }else{
//         moreText.style.display = "none";
//         boxe.style.display ="flex"
//     }
// });






let moreText = document.getElementById("info-box-1");
let box = document.getElementById("yes");
let mainText = document.getElementById("info-main-text")
let infoBox = document.getElementById("info-box")

box.addEventListener("click", function folding(){ 
    if(moreText.style.display = "none"){
        infoBox.style.height ="250px";
        mainText.style.display ="none";
        moreText.style.opacity = "100";
        moreText.style.display = "flex";
    }
});



const observer = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));