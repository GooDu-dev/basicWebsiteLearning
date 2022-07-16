function showMore(number){
    let button = document.getElementsByClassName("button")[number]
    let desc = document.getElementsByClassName("desc")[number];
    let card = document.getElementsByClassName("card")[number]
    if(button.innerText == "More!"){
        //Show content
        card.style.width = "60vw"
        desc.style.height = "20vw"
        button.innerText = "Hide"
    }
    else{
        //Hide Content
        card.style.width = "40vw"
        desc.style.height = "10vw"
        button.innerText = "More!"
    }
}