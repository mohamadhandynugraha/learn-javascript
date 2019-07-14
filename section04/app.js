/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// inisialisasi variable
let globalScores, roundScore, currentActivePlayer, statusGamePlay
init()

document.querySelector('.btn-roll').addEventListener('click', e => {

    if (statusGamePlay) {
        // inisialisasi dice DOM
        let diceDOM = document.querySelector('.dice');

        // 1. generate random number
        let dice = Math.floor(Math.random() * 6) + 1

        // 2. Display the result, sesuaikan angka dengan gambar dadu
        diceDOM.style.display = 'block'
        diceDOM.src = `dice-${dice}.png`

        // 3. update the round score IF the dice was not 1
        if (dice !== 1) {
            // add to round score
            roundScore += dice
            document.querySelector(`#current-${currentActivePlayer}`).textContent = roundScore
        } else {
            changePlayer()
        }
    }
})

// tambahin fungsi btn hold
// btn hold fungsinya: tambahkan roundScore ke globalScore
document.querySelector('.btn-hold').addEventListener('click', e => {
    if (statusGamePlay) {
        // add current score to global score
        globalScores[currentActivePlayer] += roundScore

        // update the UI
        document.querySelector(`#score-${currentActivePlayer}`).textContent = globalScores[currentActivePlayer]

        // check if player won the game
        if (globalScores[currentActivePlayer] >= 20) {
            document.querySelector(`#name-${currentActivePlayer}`).textContent = 'WINNER'
            // hide the dice
            document.querySelector('.dice').style.display = 'none'
            // tambahkan class winner
            document.querySelector(`.player-${currentActivePlayer}-panel`).classList.add('winner')
            document.querySelector(`.player-${currentActivePlayer}-panel`).classList.remove('active')
            statusGamePlay = false
        } else {
            // change player
            changePlayer()
        }
    }
})

// tambahkan fungsi new game
// panggil fungsi init
document.querySelector('.btn-new').addEventListener('click', init)

function changePlayer() {
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

function init() {
    globalScores = [0, 0], roundScore = 0, currentActivePlayer = 0, statusGamePlay = true
    document.querySelector('.dice').style.display = 'none'

    // inisialisasi nilai 0 pada global score dan round score 
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector(`.player-0-panel`).classList.remove('winner')
    document.querySelector(`.player-1-panel`).classList.remove('winner')
    document.querySelector(`.player-0-panel`).classList.remove('active')
    document.querySelector(`.player-1-panel`).classList.remove('active')
    document.querySelector(`.player-0-panel`).classList.add('active')
}