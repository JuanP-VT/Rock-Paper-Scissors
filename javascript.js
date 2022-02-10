
/* Pc picks and displays it */
function playerPlay(){
    playerChoice = prompt("pick Rock  -  Paper  -  Scissors").toLowerCase();
    if (playerChoice == 'rock'| playerChoice == 'paper' | playerChoice == 'scissors'){
        console.log("Player picks" + " " + playerChoice)
        return    playerChoice;
    }
    else{
        alert(" Please pick Rock, Paper or Scissors")
        console.log("Invalid input, game will be invalidated");
        console.log(" ");
    }
}

/* The computer will pick one at random and display it*/
function pcPlay(){
    pcChoice = Math.floor(Math.random() * 3);
    if (pcChoice ==0){
        pcChoice = 'rock'
    }
    else if(pcChoice == 1) {
        pcChoice = 'paper'
    }
    else if (pcChoice == 2){
        pcChoice = 'scissors'
    }
    console.log("PC picks "  +pcChoice)
    return   pcChoice;
}

/* Set the main logic of the game with both inputs */

function playGame( a,b ){ 
    if (a == 'rock'){
        if (b == 'rock') {
            return  result = 'draw';
        }
        else if (b == 'paper'){
            return  result = 'lose';
        }
        else if (b == 'scissors'){
            return result = 'win';
        }
    }    
    else if (a == 'paper'){
        if (b == 'rock') {
            return  result = 'win';
        }
        else if (b == 'paper'){
            return    result = 'draw';
        }
        else if (b == 'scissors'){
            return   result = 'lose';
        }
    }
    else if (a == 'scissors'){
        if (b == 'rock') {
            return   result = 'lose';
        }
        else if (b == 'paper'){
            return    result = 'win';
        }
        else if (b == 'scissors'){
            return   result = 'draw';
        }
    }
}
/* Displays de result of the game function and keep track of scores*/
function scoreTrack(a){
    if (a == 'win'){
        console.log("Player Won!")
        return playerScore++;

    }
    else if (a == 'lose'){
        console.log("PC Won!")
        return pcScore++;
    }

}


/* Set two players */
let playerScore=0;
let pcScore = 0;

/* loop until one of the players reaches a score of 5 */
for (let index = 1; index < 25; index++) {
console.log("Game - " + index)
playerPlay();
pcPlay();
playGame(playerChoice, pcChoice);
console.log("Result:" + result);
scoreTrack(result);
console.log('Current score is PC ' + +pcScore  + '  - Player ' + +playerScore);
console.log ("");

if (playerScore  == 5 | pcScore == 5){
    if(playerScore == 5){
        console.log("Player has won !!GG!!")
    }
    else if (pcScore == 5){
        console.log("Pc has won !!GG!!");
    }
    index=50;
}
}
