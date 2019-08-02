let btnPress = document.getElementById('startbutton')
let switchPress = document.getElementById('switchbutton')
let dicevalue = document.getElementById('dicenum')
let currentscore = document.getElementById('userscore')
let currentscore2 = document.getElementById('playerscore2')
let usermessage = document.getElementById('message1')
let diceImage = document.getElementById('diceimage')

let diceNumber;
let currentplayer = 'player1'
let score = 0;
let player2score = 0;


// let roll = document.addEventListener("click", () =>{
//     console.log("you rolled the dice")
// })

//looks for button press 
btnPress.addEventListener("click", () => {
    btnPress.innerHTML = "ROLL"
    rollDice()
})

switchPress.addEventListener("click", () => {
    switchPlayer()
})

// rolls dice 
const rollDice = () => {
    diceNumber = Math.floor(Math.random() * 6) + 1
    console.log(diceNumber)
    // score += diceNumber
    dicenum.innerHTML = diceNumber;
    diceImage.src = `img/dice${diceNumber}.png`
    // scoreCalc()
    userScoreCalc()
}

// adds score to correct player 
const userScoreCalc = () => {
    if(currentplayer == 'player1'){
    score += diceNumber
    console.log(score)
    scoreCalc()
}
    else{
        player2score += diceNumber
        console.log(player2score)
        scoreCalc()
    }
}

// if player rolls 1 then game over, if reaches 20 they win
const scoreCalc = () => {
    if (currentplayer == 'player1') {
        if (score == 1 || diceNumber == 1) { 
            message1.innerHTML = "Sorry you rolled 1 \n next player";
            score = 0
            userscore.innerHTML = score;
            switchPlayer();
        }
        else if (score >= 20) {
            userscore.innerHTML = score;
            message1.innerHTML = "Winner!!!!!!!"
            end()

        }
        else {
            userscore.innerHTML = score;
            message1.innerHTML = "Roll again";
        }
    }
    else{
        if (player2score == 1 || diceNumber == 1) {
            message1.innerHTML = "Sorry you rolled 1 \n you're a loser"
            playerscore2.innerHTML = player2score;
            player2score = 0
            switchPlayer();
        }
        else if (player2score >= 20) {
            playerscore2.innerHTML = player2score;
            message1.innerHTML = "Winner!!!!!!!"
            end()

        }
        else {
            playerscore2.innerHTML = player2score;
            message1.innerHTML = "Roll again";
        }

    }
}

//switch players
const switchPlayer = () => {
    if (currentplayer == 'player1') {
        currentplayer = 'player2'
        console.log(player2score)
    }
    else {
        currentplayer = 'player1'
        console.log(score)
    }

}

//resets game area
const end = () => {
    btnPress.innerHTML = "Play Again?"
    diceNumber = 0;
    score = 0;
    player2score = 0;
    playerscore2.innerHTML = player2score;
    currentplayer = 'player1'
    userscore.innerHTML = score;
    dicenum.innerHTML = diceNumber;
}