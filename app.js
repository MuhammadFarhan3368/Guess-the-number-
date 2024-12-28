let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber)

let userInput = document.querySelector('#userInput');
let submitButton = document.querySelector('.submitButton');
let previousGuess = document.querySelector('.previousGuess');
let remainingGuess = document.querySelector('.remainingGuess');
let lowOrHi = document.querySelector('.lowOrHi');
let result = document.querySelector('.result');

const toggleCheckbox = document.getElementById('toggle');
toggleCheckbox.addEventListener('change', () => {
    document.body.style.backgroundColor = toggleCheckbox.checked ? '#212121' : 'burlywood';
    document.userInput.style.backgroundColor = toggleCheckbox.checked ? 'burlywood' : '#212121';
    document.submitButton.style.backgroundColor = toggleCheckbox.checked ? 'burlywood' : '#212121';
});

let p = document.createElement('p')

let prevGuessArr = [];
let numGuess = 0;

let plaGame = true;

if (plaGame) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let userGuess = parseInt(userInput.value)
        validateGuess(userGuess)
        console.log(userGuess)
    })
};

function validateGuess(userGuess) {
    if (isNaN(!userGuess)) {
        alert("enter a valid number")
    }else if(userGuess == ''){
        alert("Type a number please")
    }else if(userGuess < 1){
        alert("please enter a number greater than 1")
    }else if(userGuess > 100){
        alert("please enter a number less than 100")
    }else{
        prevGuessArr.push(userGuess);
        console.log(numGuess)
        if (numGuess === 9) {
            endGame()
            displayGuess(userGuess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
        }else{
            displayGuess(userGuess);
            checkGuess(userGuess);
        }
    }
}

function checkGuess(userGuess) {
    if(userGuess === randomNumber) {
        displayMessage('Congratulations! you guess it right')
        endGame()
    }else if(userGuess < randomNumber){
        displayMessage('Your number is too low')
    }else if(userGuess > randomNumber){
        displayMessage('Your number is too high')
    }
}

function displayGuess (userGuess) {
    userInput.value = '';
    previousGuess.innerHTML += `${userGuess}, `;
    numGuess++;
    remainingGuess.innerHTML = `${10 - numGuess}`
}

function displayMessage (message){
    lowOrHi.innerHTML = `${message}`
}

function endGame () {
    userInput.value = '';
    p.innerHTML = `<button id="newGame">Start a new Game</button>`
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    result.appendChild(p)
    plaGame = false
    newGame()
}

function newGame(){
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(Math.random()*100 + 1);
        console.log(randomNumber)
        prevGuessArr = [];
        previousGuess.innerHTML = ''
        numGuess = 0
        remainingGuess.innerHTML = 10
        userInput.removeAttribute('disabled')
        result.removeChild(p)
        plaGame = true
    });
}
