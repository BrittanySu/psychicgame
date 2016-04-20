
// Sets the computer choices 
var computerChoices = ['t', 'd', 'r'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;


// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	// User Guess of tulip, daisy, or rose
	if ((userGuess == 't') || (userGuess == 'd') || (userGuess == 'r')){

		// All possible guesses 
		if ((userGuess == 't') && (computerGuess == 'r')){
			losses++;
		}else if ((userGuess == 't') && (computerGuess == 'd')){
			losses++;
		}else if ((userGuess == 'r') && (computerGuess == 't')){
			losses++;
		}else if ((userGuess == 'r') && (computerGuess == 'd')){
			losses++;
		}else if ((userGuess == 'd') && (computerGuess == 't')){
			losses++;
		}else if ((userGuess == 'd') && (computerGuess == 'r')){
			losses++;
		}else if (userGuess == computerGuess){
			wins++;
		}  

		// How to tally wins and losses/convert them into writing below
		var html = '</p>' +
		"<p>YASS! You know me so well!: " + 
		wins + 
		"</p>" +
		"<p>Try Again: " + 
		losses +
		"</p>";

		// shows winning and losing guesses in HTML id (in html document)
		document.querySelector('#game').innerHTML = html;

	}
}