function setHomeSize(){
    let h_cont = document.getElementsByClassName("home_container")[0]
    h_cont.style.height = window.innerHeight + "px";
}

setHomeSize()

function startButtonEvent(){
    let button = document.getElementById("start");
    button.addEventListener("click", function(){
        if(button.innerText == "Show Exam"){
            location.href = "./exam.html"
        }
        spawnWizard()
        
    })
}

startButtonEvent()

async function spawnWizard(){
    let wizard = document.createElement("img")
    let content_cont  = document.getElementsByClassName("home_container")[0].getElementsByClassName("content")[0];
    let button = document.getElementById("start")
    let text = document.createElement("div")
    text.innerHTML = `<p>Hello every junior web developer!</p>
    <p>Today we have an examination</p>
    <a href="./exam.html">Show Exam</a>`
    text.setAttribute("class", "text")
    wizard.src = "./asset/wizard.png"
    wizard.setAttribute("class", "wizard")
    await content_cont.appendChild(wizard);
    await content_cont.removeChild(button);
    await content_cont.appendChild(text);
}