
// This code will run as soon as the page loads

window.onload =  function() {

  $("#start").on("click", stopwatch.start);
};

//  Variable that holds setInterval that runs the stopwatch
var intervalId;
//Variable that prevents the clock from being sped up unnecessarily
var clockRunning = false;
var seconds=10;
var value ="";
var win=0;
var loss=0;
var notAnswered =0;

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

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;
    $("#display").text("Remaining time: 10 seconds.");

  },
  
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

function eventListenerLake() {

  $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));
    //console.log("After click value = " + value);
    

      if ( value=== questions[0].answer) {
      
        win=0;
        win++;
        $("#wins").text(win);
        
        show('Page2a','Page2');
        var windowTimeout = setTimeout(function(){
          console.log("Alert #1");
          show('Page3','Page2a');
        }, 2000);
        stopwatch.stop();
        stopwatch.reset();
        stopwatch.start();
        //stopwatch.time=2000;
        $("#display").text("Remaining time: " + stopwatch.time + " seconds.");  
      }

      else if ( value=== questions[0].guesses[0]||
        value=== questions[0].guesses[2] ||
        value=== questions[0].guesses[3]) {

        loss=0;
        loss++;
        $("#losses").text(loss);
        show('Page2b','Page2');
        var windowTimeout = setTimeout(function(){
          console.log("Alert #1");
          show('Page3','Page2b'); 
        }, 2000);
        stopwatch.stop();
        stopwatch.reset();
        stopwatch.start();
        //stopwatch.time=2000;
        stopwatch.time=7;
        $("#display").text("Remaining time: " + stopwatch.time + " seconds.");   
      }
    
 
  });
};

//if (10>stopwatch.time>3) {

  
  eventListenerLake();
/*
}
else {

      console.log(stopwatch.time + " seconds left");
      notAnswered++;
      $("#notA").text(notAnswered);
      show("Page2c","Page2");
      var windowTimeout = setTimeout(function(){
          console.log("Alert #1");
          show("Page3","Page2c"); 
        }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      $("#display").append(stopwatch.start());
    }

*/



function eventListenerBeach() {

  $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));
    //console.log("After click value = " + value);

    if ( value=== questions[1].answer) {
    
      win++;
      $("#wins").text(win);
      
      show('Page3a','Page3');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page4','Page3a');
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }

    else if ( value=== questions[1].guesses[0]||
      value=== questions[1].guesses[2] ||
      value=== questions[1].guesses[3]) {

      loss++;
      $("#losses").text(loss);
      show('Page3b','Page3');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page4','Page3b'); 
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }
  });
};

  eventListenerBeach();


function eventListenerMountain() {

  $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));
    //console.log("After click value = " + value);

    if ( value=== questions[2].answer) {
    
      win++;
      $("#wins").text(win);
      
      show('Page4a','Page4');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page5','Page4a');
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }

    else if ( value=== questions[2].guesses[1]||
      value=== questions[2].guesses[2] ||
      value=== questions[2].guesses[3]) {

      loss++;
      $("#losses").text(loss);
      show('Page4b','Page4');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page5','Page4b'); 
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }
  });
};

  eventListenerMountain();


function eventListenerRiver() {

  $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));
    //console.log("After click value = " + value);

    if ( value=== questions[3].answer) {
    
      win++;
      $("#wins").text(win);
      
      show('Page5a','Page5');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page6','Page5a');
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }

    else if ( value=== questions[3].guesses[1]||
      value=== questions[3].guesses[2] ||
      value=== questions[3].guesses[3]) {

      loss++;
      $("#losses").text(loss);
      show('Page5b','Page5');
      var windowTimeout = setTimeout(function(){
        console.log("Alert #1");
        show('Page6','Page5b'); 
      }, 2000);
      stopwatch.stop();
      stopwatch.reset();
      stopwatch.start();
      //stopwatch.time=2000;
      //$("#display").text(stopwatch.reset());  
    }
  });
};

  eventListenerRiver();








/*
__________

QUESTION 34 week3

*/












  














