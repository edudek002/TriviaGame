// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads


window.onload =  function() {
$("#start").on("click", stopwatch.start);

  //$("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  //$("#reset").on("click", stopwatch.reset);

};





//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // DONE: Change the "display" div to "120."
    $("#display").text("120");

    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }

   }, 
  
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    var seconds = 20 - stopwatch.time;

    console.log(seconds); 

    $("#display").text("Remaining time: " + seconds + " seconds.");

    if (stopwatch.time <20){
      console.log("Please select choice answer");
    }
    else {
      stopwatch.stop();
      $("#information").text("Time out");
    }
  },

};

  var radios = "";
  var val= "";
  var win=0;

  


var submitAnswer = function() {

  var radios = document.getElementsByName('choice');

  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  

  if ( val == "Answer1" ) {
    console.log('Answer is correct !');
    win++;
    stopwatch.stop();
    $("#information").text("Your answer is correct");

    $("#wins").text("Wins = " + win);
    //delay 1 second
  } 
  else {
    console.log('Answer is wrong');
    win;
    stopwatch.stop();
    $("#information").text("Your answer is incorrect");
    //delay 1 second
  }

};






