$(document).ready(function () {

// Create the following variables and set to 0 at beginning of the game:
  var numberCollected = 0;
  $("#number-collected").html(numberCollected);
  console.log(numberCollected);
  var wins = 0;
  $("#wins").html(wins);
  console.log(wins);
  var losses = 0;
  $("#losses").html(losses);
  console.log(losses);

// Set a random number between 19-120 for the numberCollected variable: 
  // 1. Use Math.floor(Math.random() * ((y-x)+1) + x);
  // 2. Write the result to the Crystals to Collect <div>
  var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  console.log("Random Number: " + randomNumber);
  $("#random-number").html(randomNumber);

// Set a random value to each button that is between 1-12: 
  // 1. Create new variables for each button.
  // 2. Use Math.floor(Math.random() * y) + x); (x=1, y=12) to generate a random num for each button. 
  //    Do this outside on-click so numbers assigned don't change during same game.
      var butt1 = Math.floor((Math.random() * 12) + 1);
      console.log("Button1 Value: " +butt1);
      var butt2 = Math.floor((Math.random() * 12) + 1);
      console.log("Button2 Value: " + butt2);
      var butt3 = Math.floor((Math.random() * 12) + 1);
      console.log("Button3 Value: " + butt3);
      var butt4 = Math.floor((Math.random() * 12) + 1);
      console.log("Button4 Value: " + butt4);

//Create the on-click event for button 1:
  // 1. Create on-click function that targets the crystal1 image.
  $("#crystal1").on("click", function() {
  // 2. Allow for the click to capture the random number from the button and add it to numberCollected. 
  // Same random number stays with the button for the whole game.
  numberCollected += butt1;
  console.log("New Score: " +numberCollected);
  // 3. Write the result to the Number Collected <div>
  $("#number-collected").html(numberCollected);
  // 4. Check for the total after each click.
  checkTotal();

  });

// Add same on click event/function(s) to buttons 2, 3, and 4. 
  // Button 2:
  $("#crystal2").on("click", function() {
    numberCollected += butt2;
    console.log("New Score: " +numberCollected);
    $("#number-collected").html(numberCollected);
    checkTotal();
    });

  // Button 3:
  $("#crystal3").on("click", function() {
    numberCollected += butt3;
    console.log("New Score: " +numberCollected);
    $("#number-collected").html(numberCollected);
    checkTotal();
    });

    // Button4:
    $("#crystal4").on("click", function() {
      numberCollected += butt4;
      console.log("New Score: " +numberCollected);
      $("#number-collected").html(numberCollected);
      checkTotal();
      });

// Create a function to check for the total after each click, add the wins and losses, and show a won/lost message:
function checkTotal() {
// 1. "If" statements to determine if the total numberCollected is equal to or greater than the randomNumber.
      // a. If equal to, tally a win and write a message in the youWon <div>
      // b. Set a timeout feature to get the message to disappear shortly after winning.
      if (numberCollected === randomNumber) {
        console.log("You won!");
        wins++;
        $("#wins").html(wins);
        $("#youWon").html("<b>Congrats, you won!</b>");
        setTimeout(fade_out, 1500);
        function fade_out() {
          $("#youWon").fadeOut().empty();
        }
        resetGame();
      }
      // c. If greater than, tally a loss and write a message in the youLost <div>
      // d. Set a timeout feature to get the message to disappear shortly after winning.
      if (numberCollected > randomNumber) {
        console.log("Sorry!");
        losses++;
        $("#losses").html(losses);
        $("#youLost").html("<b>Sorry, try again!</b>");
        setTimeout(fade_out, 1500);
        function fade_out() {
          $("#youLost").fadeOut().empty();
        }
        resetGame();
      }
    }
  
//Create a function to reset and start a new game:
function resetGame() {
 // 1. Generate a new random number for var randomNumber. 
    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#random-number").html(randomNumber);
    console.log("New Random: " +randomNumber);
 // 2. Set numberCollected back to 0.
    numberCollected = 0;
    $("#number-collected").html(numberCollected);
 // 3. When a player wins or loses, reset buttons back to different random numbers between 1-12.
    butt1 = Math.floor((Math.random() * 12) + 1);
    console.log("Button1 Value: " +butt1);
    butt2 = Math.floor((Math.random() * 12) + 1);
    console.log("Button2 Value: " + butt2);
    butt3 = Math.floor((Math.random() * 12) + 1);
    console.log("Button3 Value: " + butt3);
    butt4 = Math.floor((Math.random() * 12) + 1);
    console.log("Button4 Value: " + butt4);
// DO NOT remove the wins/losses tally.
  
}

});