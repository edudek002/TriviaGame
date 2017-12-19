// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads

window.onload =  function() {

  $("#start").on("click", stopwatch.start);
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
      $("#information").text("Time is Up!");
    }
  },
}; //END OF OBJECT



var radios = "";
var val= "";
var win=0;
var  questions = [
  {
    "question":"What is my favorite color?",
    "guesses":["Yellow","Green","Blue","Purple"],
    "answer":"Blue"
  },
  {
    "question":"What is my favorite season?",
    "guesses":["spring","summer","fall","winter"],
    "answer":"summer"
  }];

  $("#question1").text(questions[0].question);
  $("#question2").text(questions[1].question);

  $("#true1").text(questions[0].answer);
  $("#true2").text(questions[1].answer);

/*
  $( document.body ).click(function() {
  $( "form" ).each(function( i ) {
    if ( this.style.color !== "blue" ) {
      this.style.color = "blue";
    } else {
      this.style.color = "";
    }
  });
});

*/




var submitAnswer = function() {

  //Allows to use multiple choice answer

  var radios = document.getElementsByName('choice');

  for (var i = 0; i < 8; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;      
    }
  }
  
  if ( val == "1") {
    console.log('Answer is correct !');
    win++;        
    $("#information").text("Your answer is correct");
    $("#wins").text("Wins = " + win);
  }

  else if ( val == "6") {
    console.log('Answer is correct !');
    win++;        
    $("#information").text("Your answer is correct");
    $("#wins").text("Wins = " + win);    
  }

  else {
    console.log('Answer is wrong');
    win;        
    $("#information").text("Your answer is incorrect");
  }
};




  














