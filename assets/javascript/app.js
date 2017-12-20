
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


// STOPWATCH OBJECT
var stopwatch = {

  time: 0,
  lap: 1,
  
  start: function() {

    // SetInterval to start the count here and set the clock to running.
    $("#display").text("Remaining time: 30 seconds.");
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
    seconds = 5 - stopwatch.time;
    console.log(seconds); 
    $("#display").text("Remaining time: " + seconds + " seconds.");

    if (stopwatch.time <5){
      console.log("Please select choice answer");
    }
    else {
      stopwatch.stop();
      $("#information").text("Time is Up!");
    }
  },
}; //END OF STOPWATCH OBJECT


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

  $("#question1").text(questions[0].question);
  $("#question2").text(questions[1].question);
  $("#question3").text(questions[2].question);
  $("#question4").text(questions[3].question);



  $("#true1").text(questions[0].answer);
  $("#true2").text(questions[1].answer);
  $("#true1").text(questions[2].answer);
  $("#true2").text(questions[3].answer);


  $("#Answer1").text(questions[0].guesses[0]);
  $("#Answer2").text(questions[0].guesses[1]);
  $("#Answer3").text(questions[0].guesses[2]);
  $("#Answer4").text(questions[0].guesses[3]);

  $("#Answer5").text(questions[1].guesses[0]);
  $("#Answer6").text(questions[1].guesses[1]);
  $("#Answer7").text(questions[1].guesses[2]);
  $("#Answer8").text(questions[1].guesses[3]);

  $("#Answer9").text(questions[1].guesses[0]);
  $("#Answer10").text(questions[1].guesses[1]);
  $("#Answer11").text(questions[1].guesses[2]);
  $("#Answer12").text(questions[1].guesses[3]);

  $("#Answer13").text(questions[1].guesses[0]);
  $("#Answer14").text(questions[1].guesses[1]);
  $("#Answer15").text(questions[1].guesses[2]);
  $("#Answer16").text(questions[1].guesses[3]);

  



  //console.log("Lenght of Answer Array" + questions[0].guesses.length);


  //$(document).ready(function() {

      // DYNAMICALLY CREATE BUTTONS
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

    //});




    //var submitAnswer = function() {

  //Allows to use multiple choice answer

  //var radios = document.getElementsByName('choice').forEach(el);
  /*
  radios.forEach(function(radio) {
    if (radio.checked)
      console.log(el);
      val = radios[i].value;
  });

  */

  /*

var submitAnswer = function() {

  for (var i = 0; i <questions[0].guesses.length; i++) {

    //$("#question1").on("click", questions[0].guesses[i]);

    //if (questions[0].guesses[i] == questions[0].answer) {

      if (i==1) {

      console.log('Answer is correct !');
           
    }

    else{

      console.log('Answer is correct !');

    }
  };

}
*/

//submitAnswer();

//function registerEventListener() {

  console.log(questions[0].guesses[1]);


  function registerEventListener() {


    $(".guesses").on("click", function() {

    value = ($(this).attr("data-guesses"));

    console.log("After click value = " + value);

    });

  };

  registerEventListener();
/*

      if (questions[0].guesses[0]!=="Red Lake"){alert('Answer is WRONG !');}

      else if (questions[0].guesses[1]=="Red Lake") {alert('Answer is correct !');}

      else if (questions[0].guesses[0]!=="Red Lake"){alert('Answer is WRONG !');}

      else if (questions[0].guesses[0]!=="Red Lake"){alert('Answer is WRONG !');}

        
});

        //win++;
        //$("#wins").text(win);
           
      /*
      else if(questions[0].guesses[i]!=="Red Lake") {

      console.log('Answer is WRONG !');
      alert('Answer is WRONG !');

      }

    };

  });

//}

//registerEventListener();
  /*
  gemValue = ($(this).attr("data-gemvalue"));

  console.log("After click gemvalue = " + gemValue);
  alert("you guessed: " + gemValue);
  gemValue = parseInt(gemValue);
  counter += gemValue;

  $("#total-number").text(counter);

  

  if (counter === randomLg) {
    alert("You win!");
    win++;
    $("#wins").text(win);
    finalWin=win-loss;
    if (finalWin>=0){
      $("#finalWin").text(finalWin);
    }
    else {
      $("#finalWin").text(0);
    }
    //start new game
    startGame();
    roundComplete();
  }
  else if (counter >= randomLg) {
    alert("You lose!!");
    loss++; 
    $("#losses").text(loss);
    finalWin=win-loss;
    if (finalWin>=0){
      $("#finalWin").text(finalWin);
    }
    else {
      $("#finalWin").text(0);
    }
    //start new game
    startGame();
    roundComplete();
  }

  });
}



/*  
 
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


*/

  /*

      // Be sure to test that your code works for this major task, before proceeding to the next one!

      // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
      // =================================================================================

      // 7. Create an "on-click" event attached to the ".letter-button" class.
      $(".letter-button").on("click", function() {

        // Inside the on-click event...

        // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    //var fridgeMagnet = $("<div>");

        // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    //fridgeMagnet.addClass("letter fridge-color");

        // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
        // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
    //fridgeMagnet.text($(this).attr("data-letter"));

        // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);

        var fridgeMagnet = $('<div class="letter fridge-color">').text($(this).attr("data-letter"));

        $("#display").append(fridgeMagnet);

      });

      // Be sure to test that your code works for this major task, before proceeding to the next one!

      // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
      // =================================================================================

      // 12. Create an "on-click" event attached to the "#clear" button id.
      $("#clear").on("click", function() {

        // Inside the on-click event...

        // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
        $("#display").empty();

      });

    });

/*

  

  var TriviaGame =
. . .
  d_answer_list:     $("#answer_list"),
. . .
    // display the answers
    for (i = 0; i < answers.length; ++i)
    {
      // create a jQuery handle for the list item, then append it to the list
      var item = $('<li class="list-group-item answer text-center">'+answers[i]+'</li>');
      this.d_answer_list.append(item);
    }

    // $(".answer").on("click", function()
TriviaGame.d_answer_list.on('click', 'li.answer', function()
{
  console.log("Answer selected:", this);
});

// $(".answer").click(function()
// {
//   console.log("Answer selected:", this);
// });

// $(".answer").bind("click", function()
// {
//   console.log("Answer selected:", this);
// });




//event.preventDefault();

/*
FRIDGE 11 week4
__________

QUESTION 34 week3
_______________-




*/

/*

var submitAnswer = function() {

  //Allows to use multiple choice answer

  var radios = document.getElementsByName('choice').forEach(el);
  /*
  radios.forEach(function(radio) {
    if (radio.checked)
      console.log(el);
      val = radios[i].value;
  });

  */


  /*


  for (var i = 0; i < 8; i++) {
    if (radios.get(i).checked) {
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
*/

//if current question<questions.length

//show the next question







  














