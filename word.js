let Letter = require("./letter");

let Word = function(wordArray, word) {
    this.wordArray = wordArray;
    this.word = word;
    this.guess = function(guess) {
        checkGuess(guess);
    }
}