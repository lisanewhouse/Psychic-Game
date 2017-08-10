


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gSoFar = [];
var CompNumer = null;

var letters =["a", "b", "c", "d", "e", "f", "g", 
			  "h", "i", "j", "k", "l", "m", "n",
			  "o", "p", "q", "r", "s", "t", "u",
			  "v", "w", "x", "y", "z"];

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

var prGuessesLeft = function() { 
 	document.getElementById("left").innerHTML = guessesLeft;
};
var prGSoFar = function() {
	document.getElementById("soFar").innerHTML = gSoFar.join(", ");
};
var newCompNumber = function() {
	this.compNumber = this.letters[Math.floor(Math.random() * this.letters.length)];
}

var reset = function() {
	guessesLeft = 10;
	gSoFar = [];
	compNumber = null;

	newCompNumber();
	prGuessesLeft();
	prGSoFar();

}
newCompNumber();
prGuessesLeft();

document.onkeyup = function(event) {
	guessesLeft--;
  	var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
  	gSoFar.push(userLetter);
	prGuessesLeft();
	prGSoFar();

	if (guessesLeft > 0){
            if (userLetter == compNumber){
              	wins++;
				document.getElementById("win").innerHTML = wins;
				alert("you win");
                reset();
            }
        }else if(guessesLeft == 0){
           	losses++;
 			document.getElementById("lose").innerHTML = losses;
 			alert("you lose");
     		reset();
     	}

}


		
