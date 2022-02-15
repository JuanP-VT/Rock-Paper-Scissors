//PC picks an element at random.
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
    const pcMove = document.querySelector('#pcmove');
    pcMove.textContent ="PC picks "  +pcChoice;
    return   pcChoice;
}

//Game logic
function playGame( a,b ){ 
    if (a == 'rock'){
        if (b == 'rock') {
            return  endResult = 'draw';
        }
        else if (b == 'paper'){
            return  endResult = 'lose';
        }
        else if (b == 'scissors'){
            return endResult = 'win';
        }
    }    
    else if (a == 'paper'){
        if (b == 'rock') {
            return  endResult = 'win';
        }
        else if (b == 'paper'){
            return    endResult = 'draw';
        }
        else if (b == 'scissors'){
            return   endResult = 'lose';
        }
    }
    else if (a == 'scissors'){
        if (b == 'rock') {
            return   endResult = 'lose';
        }
        else if (b == 'paper'){
            return    endResult = 'win';
        }
        else if (b == 'scissors'){
            return   endResult = 'draw';
        }
    }
    
}

//Track scores.
let playScore = 0;
let pcScore = 0 ;
function trackScore(){
    const resultText = document.querySelector('#result');
    resultText.textContent = 'Result is : ' + endResult;
    const playerScoreText = document.querySelector('#playerscore');
    const pcScoreText = document.querySelector('#pcscore')
    if (endResult == 'win'){
        playScore++;
        playerScoreText.textContent = 'Player score : ' + playScore;
    }
    else if (endResult == 'lose'){
        pcScore++;
        pcScoreText.textContent = 'Pc Score : ' + pcScore;

    }
}
function winner(){
    if (playScore == 5 ){
        const resultText = document.querySelector('#result');
        resultText.textContent = '!!!GAME OVER PLAYER WON!!!';
        playScore = 0 , pcScore = 0;
        const playerScoreText = document.querySelector('#playerscore');
        playerScoreText.textContent = 'Player score : ' + playScore;
        const pcScoreText = document.querySelector('#pcscore')
        pcScoreText.textContent = 'Pc Score : ' + pcScore;
        return playScore = 0 , pcScore = 0;;
        }
    else if ( pcScore == 5){
        const resultText = document.querySelector('#result');
        resultText.textContent = '!!!GAME OVER PC WON!!!';
        playScore = 0 , pcScore = 0;
        const playerScoreText = document.querySelector('#playerscore');
        playerScoreText.textContent = 'Player score : ' + playScore;
        const pcScoreText = document.querySelector('#pcscore')
        pcScoreText.textContent = 'Pc Score : ' + pcScore;
        return playScore = 0 , pcScore = 0;;
    }
}
//Player picks an element and starts the game.

const rock = document.querySelector('#rock');
rock.addEventListener('click',() => {
    pcPlay();
    let playerChoice = 'rock';
    const playerMove = document.querySelector('#playermove')
    playerMove.textContent = 'Player pick ' + playerChoice;
    playGame(playerChoice , pcChoice);
    trackScore(endResult);
    winner()
});



const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');





