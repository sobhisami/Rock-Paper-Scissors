let optionsArray = ['rock', 'paper', 'scissor'];
let computerOption;
let userOption = 0;
let userSelectionElement = document.querySelector('.your-selection-result');
let computerSelectionElement = document.querySelector('.computer-selection-result');
let result = document.getElementById('results');
let selections = document.querySelector('.selections');
result.innerHTML = "Select Your Option";

let userScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.computer-score');



let rockButton = document.getElementById('rock').onclick = function () {
    userOption = 0;
    onClickFunction(userOption);

}

let paperButton = document.getElementById('paper').onclick = function () {
    userOption = 1;
    onClickFunction(userOption);

}

let scissorButton = document.getElementById('scissors').onclick = function () {
    userOption = 2;
    onClickFunction(userOption);
}


let reloadButton = document.getElementById('reload').onclick = function () {
    window.location.reload();
}

function onClickFunction(userOption) {
    computerOption = Math.floor(Math.random() * 10) % 3;
    userSelectionElement.innerHTML = optionsArray[userOption];
    computerSelectionElement.innerHTML = optionsArray[computerOption];
    choiceWinner(userOption, computerOption);

    selections.style.opacity = "1";
}

function choiceWinner(num1, num2) {
    if (num1 == num2) {
        draw();
    } else {
        switch (num1) {
            case 0:
                if (num2 == 2) winner();
                else loser();
                break;
            case 1:
                if (num2 == 0) winner();
                else loser();
                break;
            case 2:
                if (num2 == 1) winner();
                else loser();
                break;
        }
    }

}


function winner() {
    userScore.innerHTML++;
    result.innerHTML = "WIN";
    result.classList = ['winner-results'];
}

function loser() {
    computerScore.innerHTML++;
    result.innerHTML = "LOST";
    result.classList = ['looser-results'];
}

function draw() {

    result.innerHTML = "DRAW";
    result.classList = ['draw-results'];
}




