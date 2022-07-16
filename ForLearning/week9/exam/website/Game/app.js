
var q = " ";
var answer = {1:"answer1", 2:"answer2", 3:"answer3", 4:"answer4"}
var correct = "";
var curerntQ = 0, score=0;
function chooseQuestion(question){
    let ques = document.getElementById("question")
    let answers = document.querySelectorAll(".ans")
    let q_count = document.getElementById("q_count")
    switch(question){
        case 1:
            q = "1+1 = ?"
            answer[1] = "1"
            answer[2] = "2"
            answer[3] = "3"
            answer[4] = "4"
            correct = answer[2]
            break;
        case 2:
            q = "type of 'Hello World'"
            answer[1] = "string"
            answer[2] = "int"
            answer[3] = "float"
            answer[4] = "boolean"
            correct = answer[1]
            break;
        case 3:
            q = "js is stand for"
            answer[1] = "java"
            answer[2] = "javas"
            answer[3] = "jasva"
            answer[4] = "javascript"
            correct = answer[4]
            break;
        case 4:
            q = "HTML is stand for "
            answer[1] = "Hyper Tomato Machine Leaning"
            answer[2] = "Home Taobin Mcdonald Lotus"
            answer[3] = "Hyper Text Markup Language"
            answer[4] = "Horse Turtle Monkey Lake"
            correct = answer[3]
            break;
        case 5:
            q = "Which is not a programming language"
            answer[1] = "Python"
            answer[2] = "Java"
            answer[3] = "HTML"
            answer[4] = "Javascript"
            correct = answer[3]
            break;
    }

    answers.forEach(ans => {
        let choice = ans.getAttribute("choice")
        ans.innerText = answer[choice]
    })
    ques.innerText = q;
    q_count.innerText = question
}

function answerAction(){
    let answers = document.querySelectorAll(".ans")
    answers.forEach(ans => {
        ans.addEventListener("click", function(){
            let choice = ans.getAttribute("choice")
            checkAnswer(choice)
        })
    })
}
answerAction()

function checkAnswer(choice){
    let s_count = document.getElementById("score")
    if(answer[choice] == correct){
        score++
    }
    s_count.innerText = score
    curerntQ++
    if(curerntQ > 5){
        endGame()
    }
    else{
        chooseQuestion(curerntQ)
    }
}

function endGame(){
    curerntQ = 0
    let button = document.getElementById("button")
    let game = document.getElementById("game")
    let game_container  = document.getElementsByClassName("game-container")[0];
    button.style.display = "initial"
    game_container.style.height = game.offsetHeight + "px"
    game.style.display = "none"
}

function buttonAction(){
    let button = document.getElementById("button")
    button.addEventListener("click", function(){
        let game = document.getElementById("game")
        game.style.display = "flex"
        button.style.display = "none"
        curerntQ++
        chooseQuestion(curerntQ)
    })
}
buttonAction()

function setGameHeight(){
    let game_con = document.getElementsByClassName("game-container")[0]
    let game = document.getElementById("game")
    game_con.style.height = game.offsetHeight + "px"
    game.style.display = "none"
}
setGameHeight()