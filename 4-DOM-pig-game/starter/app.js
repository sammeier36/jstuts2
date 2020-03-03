/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, diceTwo, scoreGoal;

init();
// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random #
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let diceTotal = dice1 + dice2;
        
        // 2. Display the result
        let diceDOM = document.querySelector('.dice');
        let diceDOM2 = document.querySelector('.secondDice');
        diceDOM.style.display = 'block';
        diceDOM.src ='dice-' + dice1 + '.png';
        diceDOM2.style.display = 'block';
        diceDOM2.src ='dice-' + dice2 + '.png';
        
        // 3 Update the round score IF the rolled number was NOT a 1
        // if (dice1 === 6 && diceTwo === 6) {
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // } else 
        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            roundScore += diceTotal;
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            nextPlayer();
        }

        diceTwo = dice1;
    }

    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;
    //update ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won game
    if (scores[activePlayer] >= scoreGoal) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.secondDice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    } else {
        //Next Player
        nextPlayer();
    }
}
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.secondDice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    scoreGoal = 100;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.secondDice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');


};
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("scoreInput").value;
    
    // Displaying the value
    scoreGoal = inputVal;
    console.log(scoreGoal);
}
console.log(scoreGoal);











