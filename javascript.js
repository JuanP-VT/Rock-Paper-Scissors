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
    console.log(pcChoice)
    return pcChoice;
}

function playerPlay(){
    playerChoice = prompt("pick Rock  -  Paper  -  Scissors").toLowerCase();
    if (playerChoice == 'rock'| playerChoice == 'paper' | playerChoice == 'scissors'){
        console.log("Player picks" + " " + playerChoice)
    }
    else{
        alert(" Please pick Rock, Paper or Scissors")
        console.log("Invalid input, game will be invalidated");
        console.log(" ");
    }
}


playerPlay();