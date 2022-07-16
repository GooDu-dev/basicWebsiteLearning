window.onscroll = function(){
    navbar()
}
var prevY = 0;
function navbar(){
    let currentY = window.scrollY;
    let nav = document.getElementsByTagName("nav")[0]
    // scroll down
    if(currentY > prevY){
        // Hide 
        nav.style.transform = "translateY(-150%)"
    }
    // scroll up
    else{
        // Show
        nav.style.transform = "translateY(0)"
    }
    prevY = currentY
}