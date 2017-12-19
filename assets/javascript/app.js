// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads

window.onload =  function() {

  $("#start").on("click", stopwatch.start);
  //$("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  //$("#reset").on("click", stopwatch.reset);
};

//  Variable that holds setInterval that runs the stopwatch
var intervalId;
//Variable that prevents the clock from being sped up unnecessarily
var clockRunning = false;
var seconds=0;

// STOPWATCH OBJECT
var stopwatch = {

  time: 0,
  lap: 1,
  
  start: function() {

    // SetInterval to start the count here and set the clock to running.
    $("#display").text("Remaining time: 20 seconds.");
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
    seconds = 20 - stopwatch.time;
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
}; //END OF OBJECT



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
    
    //delay 1 second
    var windowTimeout = setTimeout(function(){
        
        $("#information").text("Your answer is correct");

    $("#wins").text("Wins = " + win);
      }, 1000);
  } 
  else {
    console.log('Answer is wrong');
    win;
    stopwatch.stop();
    
    //delay 1 second
    var windowTimeout = setTimeout(function(){
        
        $("#information").text("Your answer is incorrect");


      }, 1000);
  }

};









