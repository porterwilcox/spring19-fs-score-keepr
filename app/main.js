let players = [{
    name: "Player1",
    score: 0
}, {
    name: "Player2",
    score: 0
}]

let gameOver = false
let scoreToWin = 11

function score(index) {
    if (gameOver) return
    let targetPlayer = players[index]
    targetPlayer.score++
    document.querySelector(`.${targetPlayer.name.toLowerCase()}`).innerHTML = targetPlayer.score
    winner(index)
}

function winner(index) {
    if(players[index].score >= scoreToWin && Math.abs(players[0].score - players[1].score) >= 2) {
        document.querySelector(".title").innerHTML = players[index].name + ' wins!'
        gameOver = true
    }
}

function setScoreToWin(val) {
    scoreToWin = val
    reset()
}

function reset() {
    document.querySelector(".title").innerHTML = 'ScoreKeepr'
    players.forEach(player => {
        player.score = 0
        document.querySelector(`.${player.name.toLowerCase()}`).innerHTML = 0
    })
    gameOver = false
}