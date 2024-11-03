const bgImageE1 = document.getElementById ("bgImageE1")

window.addEventListener("scroll", ()=>{
 updateimage()   
});

function updateimage(){
    bgImagE1.style.opacity = 1 - window .pageYOffset / 900
    bgImagE1.style.backgrundsize =160 - window.pageXOffset/ 12 + "%"
}