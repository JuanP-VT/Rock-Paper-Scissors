/* Pc and Players chooses  */


let pcChoice = 2 /*Math.floor(Math.random() * 3);*/
if (pcChoice == 0) {
    pcChoice = 'rock'
} else if (pcChoice == 1) {
    pcChoice = 'paper'
} else if (pcChoice == 2) {
    pcChoice = 'scissors'
}

let playerChoice = prompt("Choose Rock Paper Scissors").toLowerCase();;
console.log("Player Choose" + " " + playerChoice);
console.log("PC Choose" + " " + pcChoice);

/* Overall Logic */
let playerScore = 0;
let pcScore = 0;
let result = 0;

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
            result = 'wins'
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
    console.log(result);

  

} else {
    alert('Please Choose Correctly');
}