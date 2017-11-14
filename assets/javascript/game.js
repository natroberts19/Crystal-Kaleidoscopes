$(document).ready(function () {

  // Key variables at beginning of the game.
  var numberCollected = 0;
  $("#number-collected").text(numberCollected);
  var wins = 0;
  $("#wins").text(wins);
  console.log(wins);
  var losses = 0;
  $("#losses").text(losses);
  console.log(losses);

  // Generates a random number between 19-120 for the numberCollected variable. Use Math.floor(Math.random() * ((y-x)+1) + x);
  var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  console.log("Random Number: " + randomNumber);
  $("#random-number").text(randomNumber);


  // Setting a random value to each button that is between 1-12. 
  // Set this outside of the on-click so all buttons use these variables.
  // Set this number at the start of each game.
  var num1 = Math.floor((Math.random() * 12) + 1);
  console.log("Button1 Value: " + num1);
  var num2 = Math.floor((Math.random() * 12) + 1);
  console.log("Button2 Value: " + num2);
  var num3 = Math.floor((Math.random() * 12) + 1);
  console.log("Button3 Value: " + num3);
  var num4 = Math.floor((Math.random() * 12) + 1);
  console.log("Button4 Value: " + num4);


  //Creates the on-click events for the buttons.
  // 1. Create click function.
  // 2. Allow for numberCollected to capture the random number from the button and add it to the numberCollected.
  // 3. Same random number stays with the button for the whole game.
  $("#crystal1").on("click", function () {
    numberCollected += num1;
    console.log("New score: " + numberCollected);
    $("#number-collected").text(numberCollected);

      // 4. Add conditionals for win and loss.
      //...Add the win and loss conditionals
      if (numberCollected == randomNumber) {
        win();
      } else if (numberCollected > randomNumber) {
        loss();
      }
  })

  // 5. Add same function(s) to buttons 2, 3, and 4. 
  $("#crystal2").on("click", function () {
    console.log("New Collected: " + numberCollected);
    numberCollected += num2;
    console.log("New score: " + numberCollected);
    $("#number-collected").text(numberCollected);
      if (numberCollected == randomNumber) {
        win();
      } else if (numberCollected > randomNumber) {
        loss();
      }
  })

  $("#crystal3").on("click", function () {
    console.log("New Collected: " + numberCollected);
    numberCollected += num3;
    console.log("New score: " + numberCollected);
    $("#number-collected").text(numberCollected);
      if (numberCollected == randomNumber) {
        win();
      } else if (numberCollected > randomNumber) {
        loss();
      }
  })

  $("#crystal4").on("click", function () {
    console.log("New Collected: " + numberCollected);
    numberCollected += num4;
    console.log("New score: " + numberCollected);
    $("#number-collected").text(numberCollected);
      if (numberCollected == randomNumber) {
        win();
      } else if (numberCollected > randomNumber) {
        loss();
      }
  })

  // Adds wins and losses to the the Wins and Losses totals.
  function win() {
    console.log("You won!");
    wins++;
    $('#wins').text(wins);
    reset();
  }

  function loss() {
    console.log("You lost!");
    losses++;
    $('#losses').text(losses);
    reset()
  }

  //Creates game reset function.
  // 1. Generate a new random number for var numberCollected. 
  // 2. Attach a new random value to each button that is between 1-12.
  // 3. When a player wins or loses, reset buttons back to different random numbers between 1-12.

  function reset() {
    numberCollected = 0;
    console.log("New Game: " + numberCollected);
    $("#number-collected").text(numberCollected);

    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    console.log("Random Number: " + randomNumber);
    $("#random-number").text(randomNumber);

    num1 = Math.floor((Math.random() * 12) + 1);
    console.log("Button1 Value: " + num1);
    num2 = Math.floor((Math.random() * 12) + 1);
    console.log("Button2 Value: " + num2);
    num3 = Math.floor((Math.random() * 12) + 1);
    console.log("Button3 Value: " + num3);
    num4 = Math.floor((Math.random() * 12) + 1);
    console.log("Button4 Value: " + num4);

  }

});