// Global variables
var startButton = document.getElementById("startButton");
var timer = document.getElementById('timer');
var timeLeft = 60;
var score = 0;
var scoreboard = [];
var scoreboard_input = "";
var scoreboardDisplay = document.getElementById("scoreboardDisplay")
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionDisplay = document.getElementById("questionDisplay");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var correctAnswer = document.getElementById("correctAnswer");

let i = 0; //Question index

// Quiz questions
const questionsArray = [
{
        question: "What is the HTML tag under which you can write the JavaScript code?",
        answers: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
        correctAnswer: 2
}, 
{
        question: "What are variables used for in JavaScript Programs?",
        answers: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
        correctAnswer: 0
},
{
        question: "Which method adds a new item to the end of an array and returns the new length?",
        answers: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
        correctAnswer: 2
}, 
{
        question: "Which of the following can't be done with client-side JavaScript?",
        answers: ["A) Sending a form's contents by email", "B) Storing the form's contents to a database file on the server", "C) Validating a form", "D) None of the above"],
        correctAnswer: 3
},
{
        question: "Which of the following are capabilities of functions in JavaScript?",
        answers: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
        correctAnswer: 1
}];



// Start button event listener
startButton.addEventListener("click", function() {
    landingPage.style.display = "none";
    quizContainer.style.display = "block";
    timerDisplay.style.display = "block";
    //Display score throughout quiz
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("score").innerHTML = score;
    //start quiz timer and display a question
    startTime();
    getQuizQuestion();
})

// Timer function, counts down from 60 seconds
function startTime() {
    var timeInterval = setInterval(function () {
        console.log(timeLeft)
      if (timeLeft >= 1) {
        timer.textContent = timeLeft
        timeLeft--;
      } else {
        timer.textContent = '';
        console.log("Time's up!")
        clearInterval(timeInterval);
        endQuiz();
      }
    }, 1000);
  }

// Listen for a click event on each quiz button
answerA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    //Displays response based on whether answer was correct or wrong
    if (0 === correctAnswer) {
        document.getElementById("ansResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
        //Update score
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        //If user answers incorrectly, subtract 5 seconds from timer
        timeLeft -= 5;
        document.getElementById("ansResponse").innerHTML = "Wrong!"
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionsArray.length -1) {
        endQuiz();
    } else {
        i++;
        getQuizQuestion();
    };
});

answerB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    if (0 === correctAnswer) {
        document.getElementById("ansResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        timeLeft -= 5;
        document.getElementById("ansResponse").innerHTML = "Wrong!"
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionsArray.length -1) {
        endQuiz();
    } else {
        i++;
        getQuizQuestion();
    };
});

answerC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    if (0 === correctAnswer) {
        document.getElementById("ansResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        timeLeft -= 5;
        document.getElementById("ansResponse").innerHTML = "Wrong!"
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionsArray.length -1) {
        endQuiz();
    } else {
        i++;
        getQuizQuestion();
    };
});

answerD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    if (0 === correctAnswer) {
        document.getElementById("ansResponse").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        timeLeft -= 5;
        document.getElementById("ansResponse").innerHTML = "Wrong!"
        setTimeout(function() {
            document.getElementById("ansResponse").innerHTML = "";
        },
        1000
        );
    }
    if (i >= questionsArray.length -1) {
        endQuiz();
    } else {
        i++;
        getQuizQuestion();
    };
});

// Display quiz question and multiple choice responses
function getQuizQuestion() {
    questionDisplay.innerText = questionsArray[i];
    answerA.innerText = questionsArray[0];
    answerB.innerText = questionsArray[1];
    answerC.innerText = questionsArray[2];
    answerD.innerText = questionsArray[3];
}

// Display high scores
function displayScores() {
    document.getElementById("scoreboardDisplay").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("timerDisplay").style.display = "none";

    scoreboard_input = "";
    for (k=0; k<scoreboard.length;k++) {
        scoreboard_input = scoreboard_input + " " + scoreboard[k];
    }

    document.getElementById("scoreboard").innerHTML = scoreboard_input;
    refreshPage();
}

// Prompt user to enter initials for scoreboard
function enterScore() {
    scoreboard.push(document.getElementById("initials").value + " " + score);
    displayScores();
}

// Clear scoreboard
function clearScores() {
    scoreboard = [];
    displayScores();
}

// Refresh page
function refreshPage() {
    score = 0;
    i=0;
}

//End quiz
function endQuiz() {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("timerDisplay").style.display = "none";
    document.getElementById("scoreboardDisplay").style.display = "none";
    //document.getElementById("ansResponse").style.display = "none";
    document.getElementById("score").style.display = score;
    refreshPage();
}

// Return to home page
function returnHome () {
    window.location.href="index.html";
}