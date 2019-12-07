let Letter = require("./letter");

let Word = function (word) {
    this.wordArray = [];
    this.returnString = function () {
        for (let i = 0; i < this.wordArray.length; i++) {
            let letter = new Letter(word[i]);
            this.wordArray.push(letter)
        }
    }
    this.guess = function (guess) {
        for (let i = 0; i < wordArray.length; i++) {
            checkGuess(guess);
        }
    }
}

module.exports = Word;