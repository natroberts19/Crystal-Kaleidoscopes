$(document).ready(function() {

// state of variable at beginning of the game.
var numberCollected = 0;
$("#number-collected").text(numberCollected);
var wins = 0;
var losses = 0;
$("#wins").text(wins);
console.log(wins);
$("#losses").text(losses);
console.log(losses);

// Generates a random number between 19-120 for the numberCollected variable. 
function startGame() {
    function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var guessNumber = randomNumber(19, 120);
    console.log("Guess Number: " + guessNumber);
    $("#random-number").text(guessNumber);
    
}
console.log(startGame());

//Creates the on-click events for the buttons.
// 1. Create click function.
$("#button1").on ("click", function(){
    console.log("New numberCollected= " + numberCollected); 
// 2. Allow for numberCollected to generate and write it to the page.
$("#number-collected").text(numberCollected); 
numberCollected = numberCollected + 1;
// 3. Attach a random value to each button that is between 1-12. 
// 4. Same random number stays with the button for the whole game.
// ...right now it is changing each time it is clicked.
    function randomButtonNumber(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var buttonNumber = randomButtonNumber(1, 12);
        console.log("Button Number: " + buttonNumber);
// 5. Add conditionals for win and loss.
    //...Add the win and loss conditionals
    //     if (numberCollected == randomNumber){
    //       win();
    //     }
    //     else if (numberCollected > randomNumber){
    //       loss();
    //     }  
// 6. Add same function(s) to all the buttons. 
  })  

  $("#button2").on ("click", function(){
    numberCollected = numberCollected + 1;
    console.log("New numberCollected= " + numberCollected); 
    $("#number-collected").text(numberCollected); 

  })  

  $("#button3").on ("click", function(){
    numberCollected = numberCollected + 1;
    console.log("New numberCollected= " + numberCollected); 
    $("#number-collected").text(numberCollected); 
   
  })  

  $("#button4").on ("click", function(){
    numberCollected = numberCollected + 1;
    console.log("New numberCollected= " + numberCollected); 
    $("#number-collected").text(numberCollected); 
   
  })  

// Adds wins and losses to the the Wins and Losses totals.
function win(){
    console.log("You won!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
    //addes the losses to the userTotal
function loss(){
    console.log("You lose!");
      losses++;
      $('#losses').text(losses);
      reset()
    }

//Creates game reset function.
// 1. When a player wins or loses, reset var numberCollected back to 0.
// 2. Generate a new random number for var guessNumber.
// 3. Attach a new random value to each button that is between 1-12.

});