const choices = ["Rock", "Paper", "Scissors"];
var win = 0 
var tie = 0 
var loses = 0 

// let playerChoice = prompt('Rock, Paper, Scissors?');
// console.log(playerChoice);

function result (tacocat) {
    return Math.floor(Math.random()*tacocat);
}

// var cpuChoice = choices[result(3)]

// console.log(cpuChoice)
// if (playerChoice == "Rock" && cpuChoice == "Scissors" || playerChoice == "Paper" && cpuChoice == "Rock" || playerChoice == "Scissors" && cpuChoice == "Paper") {
//     alert("WIN!")    
// } else if (playerChoice == "Paper" && cpuChoice == "Scissors" || playerChoice == "Scissors" && cpuChoice == "Rock" || playerChoice == "Rock" && cpuChoice == "Paper") {
//     alert ("LOSE!")    
// } else {
//     alert("TIE!")
// };

function game(){
    let playerChoice = prompt('Rock, Paper, Scissors?');
    var cpuChoice = choices[result(3)];
    if (playerChoice == "Rock" && cpuChoice == "Scissors" || playerChoice == "Paper" && cpuChoice == "Rock" || playerChoice == "Scissors" && cpuChoice == "Paper") {
        alert("WIN!") 
        win++   
        document.querySelector("#wintracker").innerHTML = win
    } else if (playerChoice == "Paper" && cpuChoice == "Scissors" || playerChoice == "Scissors" && cpuChoice == "Rock" || playerChoice == "Rock" && cpuChoice == "Paper") {
        alert ("LOSE!")  
        loses++
        document.querySelector("#losetracker").innerHTML = loses
    } else {
        alert("TIE!")
        tie++
        document.querySelector("#tietracker").innerHTML = tie
    };
    console.log(win, loses, tie)
}
