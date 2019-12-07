let Word = require("./word");

let inquirer = require("inquirer");

let alphabet = "/[a-zA-Z]/";

let words = ["Dragon", "Stag", "Serpent"];

randomWord = words[Math.floor(Math.random() * words.length)].split(",");

let incorrectGuess = [];
let correctGuess = [];

function game() {
    
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "new game?"
    }]).then(function newGame() {
        if (newGame.confirm) {
            let mysteryWord = new Word(randomWord);
            let remainingGuesses = 5;
            guess(mysteryWord);
        } else {
            console.log("ok");
        }
    })

    function guess(word) {
        let guessArray = [];
        console.log("\n");
        console.log(word.returnString());
        console.log("\n");

        inquirer.prompt([{
            name: "letterGuess",
            message: "guess a letter",
            type: "input"
        }]).then(function (word) {
            if (!name.match(alphabet)) {
                return "enter a valid letter";
            } else {
                return true;
            }
        })

    }
}