let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    let targetNumber= Math.floor(Math.random()*9)
    return targetNumber
}

const compareGuess = (userGuess, computerGuess, targetNumber) => {
    let compDiff = Math.abs(targetNumber - computerGuess);
    let userDiff = Math.abs(targetNumber - userGuess);

    if (compDiff == userDiff){
        return true
    } else if (compDiff > userDiff){
        return true
    } else if (compDiff < userDiff){
        return false
    }
}

const updateScore = (winner) => {
    if (winner == "human"){
        humanScore++
    } else if (winner == "computer"){
        computerScore++
    }
}

const advanceRound = () => {
currentRoundNumber++
}


