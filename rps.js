let options = [
    "rock",
    "paper",
    "scissors"
]

function getComputerChoice(options) {

    return options[Math.floor(Math.random() * options.length)];

}

console.log(getComputerChoice(options))