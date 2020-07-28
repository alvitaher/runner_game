

const players = [
    "playerOne", 
    "playerTwo", 
    "playerThree", 
    "playerFour"
    
];



let winner = players[Math.floor(Math.random() * players.length)];


document.onload = setTimeout(function () { 
    alert('The winner is ' + winner); }, 5000);

let startButton;
let pauseButton;
let resetButton;

const initializeButtons = () => {
    startButton = document.getElementById('start');
    pauseButton = document.getElementById('pause');
    resetButton = document.getElementById('reset');

}

initializeButtons();
