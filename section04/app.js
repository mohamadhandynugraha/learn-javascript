/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// inisialisasi variable
let globalScores = [], roundScore = 0, currentActivePlayer = 0



document.querySelector('.dice').style.display = 'none'

// inisialisasi nilai 0 pada global score dan round score 
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


document.querySelector('.btn-roll').addEventListener('click', e => {

    // inisialisasi dice DOM
    let diceDOM = document.querySelector('.dice');

    // 1. generate random number
    let dice = Math.floor(Math.random() * 6) + 1

    // 2. Display the result, sesuaikan angka dengan gambar dadu
    diceDOM.style.display = 'block'
    diceDOM.src = `dice-${dice}.png`

    // 3. update the round score IF the dice was not 1
    if(dice !== 1){
        // add to round score
        roundScore += dice
        document.querySelector(`#current-${currentActivePlayer}`).textContent = roundScore
    } else {
        // change player
        // ternary operator
        currentActivePlayer === 0 ? currentActivePlayer = 1 : currentActivePlayer = 0
        roundScore = 0
        document.getElementById('current-0').textContent = 0
        document.getElementById('current-1').textContent = 0

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        // hide the dice when dice === 1
        document.querySelector('.dice').style.display = 'none'
    }
})