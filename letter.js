let Letter = function(letter) {
    this.letter = letter;
    this.checked = false;
    this.display = function(){
        if (this.letter === " ") {
            this.checked = true;
            return " ";
        } else {
            if (this.checked === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    this.checkGuess = function(guess) {
        if (guess === this.letter) {
            this.checked = true;
        }
    };
}

module.exports = Letter;