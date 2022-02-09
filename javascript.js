

let playerScore = 0;
let pcScore = 0;
let result = 0;
let winner;

for (let i = 1; i < 25; i++) {
/* Pc and Players chooses  */

let pcChoice = Math.floor(Math.random() * 3);
if (pcChoice == 0) {
    pcChoice = 'rock'
} else if (pcChoice == 1) {
    pcChoice = 'paper'
} else if (pcChoice == 2) {
    pcChoice = 'scissors'
}
let playerChoice = prompt("Choose Rock Paper Scissors").toLowerCase();;

/* First print dialog */

console.log("Game" + ' ' +i)
console.log("Player Choose" + " " + playerChoice);
console.log("PC Choose" + " " + pcChoice);


/* Overall game logic */

    if (playerChoice == 'rock' | playerChoice == 'paper' | playerChoice == 'scissors') {
        if (playerChoice == 'rock'){
            if (pcChoice == 'rock'){
                result = 'draw'
            }
            if (pcChoice == 'paper'){
                result = 'lose'
            }
            if (pcChoice == 'scissors'){
                result = 'win'
            }
            
        }
        
        if (playerChoice == 'paper'){
            if (pcChoice == 'rock'){
                result = 'win'
            }
            if (pcChoice == 'paper'){
                result = 'draw'
            }
            if (pcChoice == 'scissors'){
                result = 'lose'
            }
            
        }
    
        if (playerChoice == 'scissors'){
            if (pcChoice == 'rock'){
                result = 'lose'
            }
            if (pcChoice == 'paper'){
                result = 'win'
            }
            if (pcChoice == 'scissors'){
                result = 'draw'
            }
            
        }

        /* Display results and move variables*/
        console.log(result);
    
      
    if (result == 'win'){
        playerScore ++;
    }
    if (result == 'lose')
        pcScore ++;
    console.log("Pc Score :"+ " " + pcScore);
    console.log("Player Score :"+ " " + playerScore);
    console.log  (" ");


    
    } else {
        alert('Please Choose Correctly');
        console.log (" Invalid output , game will be invalidated")
        console.log  (" ");

    }
if (playerScore == 5){
    winner = 'Player';
}
if (pcScore == 5){
    winner = 'PC';

}

/* Loop terminator */


if (playerScore ==5 | pcScore ==5) {
    console.log ("FINISH!!" + "   " + winner + " " + "HAS WON!!!" )
    i = 25
    

}    

}





