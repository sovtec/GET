//model//

let score ='0'
let firstNumber =''
let secondNumber =''
let correctInput =''
let playerInput =''
//view//
generateNumbers()
updateView()


function updateView(){
    let html = /*HTML*/`
    your score is ${score} <br>
   ${firstNumber} <input id="answerText" type="text"> ${secondNumber} <br>
    <button onclick="checkNumbers()"> submit </button> 
    `
    document.getElementById("app").innerHTML = html;
}
//controller//

function generateNumbers(){
    firstNumber = Math.floor(Math.random()*10)
    secondNumber = Math.floor(Math.random()*10)
}

function updateScore(){
    playerInput = document.getElementById('answerText').value
    if (playerInput == correctInput){
        score++
    }
    else {
        score--
    }
    generateNumbers()
    updateView()
}

function checkNumbers(){
    if (firstNumber < secondNumber){
        correctInput = '<'
    }
    else if (firstNumber > secondNumber){
        correctInput = '>'
    }
    else if (firstNumber == secondNumber){
        correctInput = '='
    }
    updateScore()
    
}



