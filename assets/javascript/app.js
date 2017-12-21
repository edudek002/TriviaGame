
// This code will run as soon as the page loads

window.onload =  function() {

  $("#start").on("click", stopwatch.start);
};

//  Variable that holds setInterval that runs the stopwatch
var intervalId;
//Variable that prevents the clock from being sped up unnecessarily
var clockRunning = false;
var seconds=0;
var value ="";
var win=0;
var loss=0;
var finalWin =0;

// SHOW FUNCION TO DISPLAY PAGES
//---------------------------------------------------------------------

function show(shown, hidden) {
                document.getElementById(shown).style.display='block';
                document.getElementById(hidden).style.display='none';
                return false;
            }


// STOPWATCH OBJECT
//---------------------------------------------------------------------------
var stopwatch = {

  time: 0,
  lap: 1,
  
  start: function() {

    // SetInterval to start the count here and set the clock to running.
    $("#display").text("Remaining time: 10 seconds.");
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },

  stop: function() {

    // ClearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // Increment time by 1
    stopwatch.time++;
    seconds = 10 - stopwatch.time;
    console.log(seconds); 
    $("#display").text("Remaining time: " + seconds + " seconds.");

    if (stopwatch.time <10){
      //console.log("Please select choice answer");
    }
    else {
      stopwatch.stop();
      $("#information").text("Time is Up!");
    }
  },
}; //END OF STOPWATCH OBJECT

//-----------------------------------------------------------------------------------------
//   GAME QUESTIONS


var  questions = [
  {
    "question":"What is the largest lake in Minnesota?",
    "guesses":["Lake Minnetonka","Red Lake","Leech Lake ","Mille Lacs Lake"],
    "answer":"Red Lake"
  },
  {
    "question":"What is the longest beach in the US?",
    "guesses":["Myrtle Beach, SC","Virginia Beach, VA","Canaveral Seashore, FL","Cumberland Island, GA"],
    "answer":"Virginia Beach, VA"
  },
  {
    "question":"What is the highest mountain in Europe?",
    "guesses":["Mont Blanc, France","Matterhorn, Switzerland","Mount Olympus, Cyprus","Grossglockner,Austria"],
    "answer":"Mont Blanc, France"
  },
  {

  "question":"What is the longest river in the world?",
    "guesses":["Mississippi","Nile","Amazon","Volga"],
    "answer":"Amazon"
}];

// Create questions

  $("#question1").text(questions[0].question);
  $("#question2").text(questions[1].question);
  $("#question3").text(questions[2].question);
  $("#question4").text(questions[3].question);

/*

  $("#true1").text(questions[0].answer);
  $("#true2").text(questions[1].answer);
  $("#true1").text(questions[2].answer);
  $("#true2").text(questions[3].answer);

  */


// DYNAMICALLY CREATED GUESSES BUTTONS
// =================================================================================


for (var i = 0; i < questions[0].guesses.length; i++) {

  var buttonL = $("<button>");
  buttonL.addClass("guesses");
  buttonL.attr("data-guesses", questions[0].guesses[i]);
  buttonL.text(questions[0].guesses[i]);
  $("#guessesLake").append(buttonL);
};


for (var i = 0; i < questions[1].guesses.length; i++) {

  var buttonL = $("<button>");
  buttonL.addClass("guesses");
  buttonL.attr("data-guesses", questions[1].guesses[i]);
  buttonL.text(questions[1].guesses[i]);
  $("#guessesBeach").append(buttonL);
};

for (var i = 0; i < questions[2].guesses.length; i++) {

  var buttonL = $("<button>");
  buttonL.addClass("guesses");
  buttonL.attr("data-guesses", questions[2].guesses[i]);
  buttonL.text(questions[2].guesses[i]);
  $("#guessesMountain").append(buttonL);

};

for (var i = 0; i < questions[3].guesses.length; i++) {

  var buttonL = $("<button>");
  buttonL.addClass("guesses");
  buttonL.attr("data-guesses", questions[3].guesses[i]);
  buttonL.text(questions[3].guesses[i]);
  $("#guessesRiver").append(buttonL);

};

//EVENT LISTENER

//-----------------------------------------------------------------------


//console.log(questions[0].guesses[1]);
//console.log("right answer: "+ questions[0].answer);

function registerEventListener() {

  $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));
    console.log("After click value = " + value);

    if ( value=== questions[0].answer) {
      //alert("You win!");
      win++;
      $("#wins").text(win);
      stopwatch.stop();
      show('Page2a','Page2');
      //wait
      //show('Page3','Page2a');
      //stopwatch.start();

      }

      /*

    else if ( value=== questions[1].answer) {
      alert("You win!");
      win++;
      $("#wins").text(win);
      stopwatch.stop();
      stopwatch.start();
      show('Page4','Page3'); 
      }

      */

      else {

      //alert("You lose!!");
      loss++;
      $("#losses").text(loss);
      stopwatch.stop();
      show('Page2b','Page2');
      

      //wait
      //show('Page3','Page2b');
      //stopwatch.start();
    }
  });
};

  registerEventListener();






/*

      // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
      // =================================================================================

      // 12. Create an "on-click" event attached to the "#clear" button id.
      $("#clear").on("click", function() {

        // Inside the on-click event...

        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        $("#display").empty();
  

//event.preventDefault();


FRIDGE 11 week4
__________

QUESTION 34 week3

*/












  














