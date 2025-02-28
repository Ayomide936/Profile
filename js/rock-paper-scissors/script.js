let computerChoice  = document.getElementById("computerChoice")
let playerChoice  = document.getElementById("playerChoice")
let result =  document.getElementById("result");
let choices = ["rock","paper","scissors"];
let playerScoreDIsplay =   document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoose) {
   let computerchoose = choices[Math.floor(Math.random() * 3)];
    console.log(computerchoose);
    if(playerChoose === computerchoose) {
        computerChoice.textContent = `computerchoice ${computerchoose}`;
        playerChoice.textContent = `playerchoice:   ${playerChoose}`;
        result.textContent = `    it is a tie`;
    }
    else {
        switch (playerChoose) {
            case "rock":
                result.textContent = computerchoose === "paper" ? "you win!" : "you lose";
                computerChoice.textContent = `computerchoice ${computerchoose}`;
                playerChoice.textContent = `playerchoice:   ${playerChoose}`;
                break;
            case "paper":
                result.textContent = computerchoose === "rock" ? "you win!" : "you lose";
                computerChoice.textContent = `computerchoice ${computerchoose}`;
                playerChoice.textContent = `playerchoice:   ${playerChoose}`;
                break;
            case "scissors":
                result.textContent = computerchoose === "paper" ? "you win!" : "you lose";
                computerChoice.textContent = `computerchoice ${computerchoose}`;
                playerChoice.textContent = `playerchoice:   ${playerChoose}`;
                break;
        }

        switch (result.textContent) {
            case "you win!":
                ++playerScore
                 playerScoreDIsplay.textContent = `player: ${playerScore}`;
                 if (result.classList.contains("lose")) {
                    result.classList.remove("lose");
                 }
                 else {
                    result.classList.add("win");
                 }
                
                break;
            case "you lose":
                ++computerScore;
                 computerScoreDisplay.textContent = `computer: ${computerScore}`;
                if (result.classList.contains("win")) {
                    result.classList.remove("win");
                    result.classList.add("lose");
                }
            
                break;
        }
    }
}
function reset() {
    result.textContent = "";
    computerChoice.textContent = `computerchoice: 0`;
    playerChoice.textContent = `playerchoice:  0`;
    playerScore = 0;
    playerScoreDIsplay.textContent = `player: ${playerScore}`;
    computerScore = 0;
    computerScoreDisplay.textContent = `computer: ${computerScore}`;
}