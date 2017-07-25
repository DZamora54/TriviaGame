var questions = [
  {
   	question: "1st question",
    answers: {
      correctAnswer:"correct answer",
      wrongAnswers: [
        "wrong a",
        "wrong b",
        "wrong c"
      ]
    }
  },
  {
    question: "2nd question",
    answers: {
      correctAnswer:"correct answer",
      wrongAnswers: [
        "wrong a",
        "wrong b",
        "wrong c"
      ]
    }
  },
  {
    question: "3rd question",
    answers: {
      correctAnswer:"correct answer",
      wrongAnswers: [
        "wrong a",
        "wrong b",
        "wrong c"
      ]
    }
  },
  {
    question: "4th question",
    answers: {
      correctAnswer:"correct answer",
      wrongAnswers: [
        "wrong a",
        "wrong b",
        "wrong c"
      ]
    }
  },
  {
    question: "5th question",
    answers: {
      correctAnswer:"correct answer",
      wrongAnswers: [
        "wrong a",
        "wrong b",
        "wrong c"
      ]
    }
  }
]

var timer = {
  time: 5,
  reset: function() {
      timer.time = 5;
      $("#timerDiv").html("5");
  },
  start: function() {
      counter = setInterval(timer.count, 1000);
  },
  stop: function() {
      timer.time = 0;
     // var html = "<p>Time Remaining: 0 Seconds</p>";
     //  $("#timerDiv").html("<p>Time Remaining: 0 Seconds</p>");
  },
  count: function() {
      timer.time--;
      var html = "<p>Time Remaining: " + timer.time + " Seconds</p>";
      $("#timerDiv").html("<p>Time Remaining: " + timer.time + " Seconds</p>");
  },
};

function addQuestions() {
  var html = "<p>"+questions[0].question+"</p>"+"<button>"+questions[0].answers.correctAnswer+"</button><br>"+"<button>"+questions[0].answers.wrongAnswers[0]+"</button>";
  $("#gameContent").html("<p>"+questions[0].question+"</p>"+"<button>"+questions[0].answers.correctAnswer+"</button><br>"+"<button>"+questions[0].answers.wrongAnswers[0]+"</button>");
}



//Add a start button on load and when the start button is clicked the timer and trivia questions show up
var startButton = document.createElement("button");
var start = document.createTextNode("Start");
startButton.setAttribute("id", "startStyle");

$(document).ready(function() {
  startButton.appendChild(start);
  document.getElementById("startDiv").appendChild(startButton);
  $("#startStyle").click(function() {
    timer.start();
    timer.count();
    $("#startDiv").empty();
    addQuestions();
    
  });
});

//if timer = 0 show answer and move to next question
//if user picks wrong answer show correct answer and move to next question
//if user picks correct answer congratulate and move to next question
//when x number of questions have passed show correct wrong and unanswered and ask if user wants to restart game

