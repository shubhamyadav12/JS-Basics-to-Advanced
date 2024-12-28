let score = JSON.parse(localStorage.getItem('score')) || {
            
  wins: 0,
  losses: 0,
  ties: 0

}; 

updateScoreElement();



let isAutoPlaying = false;
let intervalId;
 
function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(function(){
      const playerMove = pickcomputerMove();
      playGame(playerMove);
    }, 3000)
    isAutoPlaying = true;  
    
  }else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',() => {
  playGame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click',() => {
  playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click',() => {
  playGame('scissors');
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }else if (event.key === 'p') {
    playGame('paper')
  }else if(event.key === 's') {
    playGame('scissors')
    
  }
  
});


function playGame(playerMove) {
const computerMove = pickcomputerMove();

let result = '';

if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose.';
} else if (computerMove === 'paper') {
result = 'You win.';
} else if (computerMove === 'scissors') {
result = 'Tie.';  
}
}else if (playerMove === 'paper') {

if (computerMove === 'rock') {
result = 'You Win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You lose.';
}
}else if (playerMove === 'rock') {
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper') {
result = 'You lose.';
} else if (computerMove === 'scissors') {
result = 'You win.';
}
}

if (result === 'You win.'){
score.wins +=1;
}else if(result === 'You lose.'){
score.losses +=1;
}else if (result === 'Tie.'){
score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));
updateScoreElement();

document.querySelector('.js-moves').innerHTML = `You Picked
<img src="Assests/${playerMove}-emoji.png" alt="" class="move-icon">
Computer Picked <img src="Assests/${computerMove}-emoji.png" alt="" class="move-icon">`;

document.querySelector('.js-result').innerHTML = result;





(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);
} 

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}




function pickcomputerMove(){
const randomNumber = Math.random();
let computerMove = '';
if (randomNumber < 1/3) {
computerMove = 'rock';
} else if (randomNumber < 2/3) {
computerMove = 'paper';
} else {
computerMove = 'scissors';
}
return computerMove;

}