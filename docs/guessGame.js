//Guessing Game

//Generate a random number
//Give the user the abillity to gues
//If they guess and they are wrong, ask them again(hint)
//If they win say that they won

function guessGame() {
  let random = Math.floor(Math.random() * 10);
  console.log(random);

  let guess;

  do {
    guess = prompt("Guess a number between 1-10.");

    console.log(guess);
    if (guess > random) {
      console.log("The guess was too high!");
    } else if (guess < random) {
      console.log("The guess was too low!");
    }
  } while (guess != random);
  {
    console.log("You Won!");
  }
}

guessGame();
