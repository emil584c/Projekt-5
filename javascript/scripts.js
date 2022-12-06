
let moreText = document.getElementById("more");
let box = document.getElementById("yes");
let boxe = document.getElementById("hydroponiBox2")

box.addEventListener("click", function folding(){ 
    if(moreText.style.display = "none"){
        moreText.style.display = "flex";
        // box.style.height ="500px";
        // box.style.width ="500px";
        boxe.style.display ="flex"
    }else{
        moreText.style.display = "none";
        boxe.style.display ="flex"
    }
});

