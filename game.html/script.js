
let randomNumber = Math.floor(Math.random() * 100) + 20;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').innerText = `Congratulations!and enjoy your life You guessed the number 
        in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerText = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        document.getElementById('message').innerText = 'Too high! Try again.';
    }
    else if (userguess>=randomNumber){
         document.getElementById('message').innerText = 'are you happy.'
    }
});