// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads


window.onload =  function() {
$("#start").on("click", stopwatch.start);

  //$("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  //$("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
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

  /*
  recordLap: function() {

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);

    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },

  */
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    var seconds = 120 - stopwatch.time;

    console.log(seconds); 

    $("#display").text("Remaining time: " + seconds + " seconds.");
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
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Answer1" ) {
    console.log('Answer is correct !');
    win++;
    $("#wins").text("Wins = " + win);
  } else {
    console.log('Answer is wrong');
  }
};




