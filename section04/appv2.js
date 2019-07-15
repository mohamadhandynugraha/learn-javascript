/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, 
it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can 
change the predefined score of 100. (Hint: you can read that value with the .value property 
    in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses 
his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, 
    so take a look at the CSS code for the first one.)


aturan nomor 2 gua ubah
video 56 mau update input final score, jadi sebelum main tentukan dulu nilai final scorenya berapa.
aturan nomor 2 jonas mau gua ubah.

cara mainnya. tentukan dulu skornya berapa menggunakan input prompt, kemudian baru main
*/

// inisialisasi variable
let globalScores, roundScore, currentActivePlayer, statusGamePlay, previousDice = 0, finalScore = 0
init()

document.querySelector('.btn-roll').addEventListener('click', e => {

    // update the score previousDice 
    // https://www.udemy.com/the-complete-javascript-course/learn/lecture/5869170#questions/1768130

    if (statusGamePlay) {
        // inisialisasi dice DOM
        let diceDOM = document.querySelector('.dice');

        // 1. generate random number

        let dice = Math.floor(Math.random() * 6) + 1

        // 2. Display the result, sesuaikan angka dengan gambar dadu
        diceDOM.style.display = 'block'
        diceDOM.src = `dice-${dice}.png`

        // 3. update the round score IF the dice was not 1
        if (previousDice === 6 && dice === 6) {
            // roundscore = 0 && globalscore jadi 0
            globalScores[currentActivePlayer] = 0
            document.querySelector(`#score-${currentActivePlayer}`).textContent = globalScores[currentActivePlayer]
            alert(`You Player ${currentActivePlayer + 1} has a two 6 times in a row.`)
            previousDice = -1
            changePlayer()

        } else if (dice !== 1) {
            // add to round score
            roundScore += dice
            document.querySelector(`#current-${currentActivePlayer}`).textContent = roundScore
            previousDice = dice
        } else {
            alert(`You Player ${currentActivePlayer + 1} has 1 in dice`)
            previousDice = -1
            changePlayer()
        }

    }
})

// tambahin fungsi btn hold
// btn hold fungsinya: tambahkan roundScore ke globalScore
document.querySelector('.btn-hold').addEventListener('click', e => {
    if (statusGamePlay) {
        previousDice = -1
        // add current score to global score
        globalScores[currentActivePlayer] += roundScore

        // update the UI
        document.querySelector(`#score-${currentActivePlayer}`).textContent = globalScores[currentActivePlayer]

        // check if player won the game
        if (globalScores[currentActivePlayer] >= finalScore) {
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
    // input pertama kali sebelum main game
    finalScore = parseInt(prompt("Berapa nilai final score yang kamu inginkan? pastikan hanya memasukan angka, bukan text"))
    while (finalScore === 0 || isNaN(finalScore)) {
        finalScore = parseInt(prompt("Berapa nilai final score yang kamu inginkan? pastikan hanya memasukan angka, bukan text"))
    }


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