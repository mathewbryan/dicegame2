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

let globalScore1 = 0;
let globalScore2 = 0;


//looks for button press 
btnPress.addEventListener("click", () => {
    btnPress.innerHTML = "ROLL"
    rollDice()
})

// Looks for user pressing the hold button which swithces the user and saves the score 
switchPress.addEventListener("click", () => {
    switchPlayer()
})

// rolls dice 
const rollDice = () => {
    document.getElementById("player1ID").textContent = "Player 1 Score"
    document.getElementById("player2ID").textContent = "Player 2 Score"
    diceNumber = Math.floor(Math.random() * 6) + 1
    console.log(diceNumber)
    dicenum.innerHTML = diceNumber;
    diceImage.src = `img/dice${diceNumber}.png`
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

// if player rolls 1 then tyhey lose their score, if reaches 20 they win
const scoreCalc = () => {
    if (currentplayer == 'player1') {
        if (score == 1 || diceNumber == 1) { 
            message1.innerHTML = "Sorry you rolled 1 \n next player";
            score = 0
            userscore.innerHTML = score;
            switchPlayer();
        }
        else if (score + globalScore1 >=20) {
            userscore.innerHTML = globalScore1;
            message1.innerHTML = "Player 1 is a Winner!!!!!!!"
            document.getElementById("player1ID").textContent = "Winner!!"
            end()
        }
        else if (score >= 20) {
            userscore.innerHTML = score;
            message1.innerHTML = "Player 1 is a Winner!!!!!!!"
            document.getElementById("player1ID").textContent = "Winner!!"
            end()

        }
        else {
            userscore.innerHTML = score;
            message1.innerHTML = "Roll again";
        }
    }
    else{
        if (player2score == 1 || diceNumber == 1) {
            message1.innerHTML = "Sorry you rolled 1 \n next player"
            playerscore2.innerHTML = player2score;
            player2score = 0
            switchPlayer();
        }
        else if (player2score >= 20) {
            playerscore2.innerHTML = player2score;
            message1.innerHTML = "Player 2 is a Winner!!!!!!!"
            document.getElementById("player2ID").textContent = "Winner!!"
            end()

        }
        else if (player2score + globalScore2 >=20) {
            userscore.innerHTML = globalScore2;
            message1.innerHTML = "Player 2 is a Winner!!!!!!!"
            document.getElementById("player2ID").textContent = "Winner!!"
            end()
        }
        else {
            playerscore2.innerHTML = player2score;
            message1.innerHTML = "Roll again";
        }

    }
}

//switch players + moves current score to total score area
const switchPlayer = () => {
    if (currentplayer == 'player1') {
        currentplayer = 'player2'
        globalScore1 += score
        document.getElementById("globalScore1").textContent = globalScore1
        score = 0
        userscore.innerHTML = score;
        colorChange()
        console.log(player2score)
    }
    else {
        currentplayer = 'player1'
        globalScore2 += player2score
        document.getElementById("globalScore2").textContent = globalScore2
        player2score = 0
        playerscore2.innerHTML = player2score;
        colorChange()
        console.log(score)
    }

}


// change color of background for active player
const colorChange = () => {
    if (currentplayer == "player1"){
        document.getElementById('player1').style.backgroundColor = "white";
        document.getElementById('player2').style.backgroundColor = "orange";
        
    }
    else if (currentplayer == "player2") {
        document.getElementById("player2").style.backgroundColor = "white";
        document.getElementById("player1").style.backgroundColor = "orange";
    }
}


//resets game area
const end = () => {
    btnPress.innerHTML = "Play Again?"
    diceNumber = 0;
    score = 0;
    player2score = 0;
    globalScore1 = 0 
    globalScore2 = 0
    playerscore2.innerHTML = player2score;
    currentplayer = 'player1'
    userscore.innerHTML = score;
    userscore.innerHTML = player2score;
    document.getElementById("globalScore1").textContent = globalScore1
    document.getElementById("globalScore2").textContent = globalScore2
    dicenum.innerHTML = diceNumber;
}