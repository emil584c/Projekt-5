
let moreText = document.getElementById("more");
let box = document.getElementById("yes");


// function readmore() {
//     if(){
        
//     }else{
        
//     }
// }

// dots.style.display === "none"



box.addEventListener("click", function folding(){ 
    if(moreText.style.display = "none"){
        moreText.style.display = "flex";
        box.style.height ="500px";
        box.style.width ="500px";
    }else{
        moreText.style.display = "none";
    }
});

