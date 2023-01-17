// Global variables
var startCountdown = false;
var stopCountdown = true;
var timeLeft = 60;
var score = 0;
var scoreboard = [];
var scoreboard_input = "";
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionDisplay = document.getElementById("questionDisplay");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var correctAnswer = document.getElementById("correctAnswer");
var scoreboardDisplay = document.getElementById("scoreboardDisplay")

let i = 0; //Question index

// Quiz questions
var questionsArray = [
{
        question: "Question: What is the HTML tag under which you can write the JavaScript code?",
        answers: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
        correctAnswer: 2
}, 
{
        question: "Question: What are variables used for in JavaScript Programs?",
        answers: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
        correctAnswer: 0
},
{
        question: "Question: Which method adds a new item to the end of an array and returns the new length?",
        answers: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
        correctAnswer: 2
}, 
{
        question: "Question: Which of the following can't be done with client-side JavaScript?",
        answers: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
        correctAnswer: 2
},
{
        question: "Question: Which of the following are capabilities of functions in JavaScript?",
        answers: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
        correctAnswer: 1
}];

// Display quiz question and multiple choice responses
function getQuizQuestion() {
    questionDisplay.textContent = questionsArray[i];
    answerA.textContent = questionsArray[0];
    answerB.textContent = questionsArray[1];
    answerC.textContent = questionsArray[2];
    answerD.textContent = questionsArray[3];
}

// Start button event listener
var start_button = document.getElementById("start_button");
start_button.addEventListener("click", function() {
    homeContainer.style.display = "none";
    quizContainer.style.display = "block";
    quizTimer.style.display = "block";
    //Display score throughout quiz
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("score").innerHTML = score;
    //start quiz timer and display a question
    startTimer();
    getQuizQuestion();
    startCountdown = true;
})

// Timer function, counts down from 60 seconds
var timer = document.getElementById('timer');
var timerId = setInterval(startTimer, 1000);

function startTimer() {
    if (timeLeft <= 0) {
        clearTimeout(timerId);
        endQuiz();
    } else {
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
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
            document.getElementById("ansResonse").innerHTML = "";
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
            document.getElementById("ansResonse").innerHTML = "";
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
            document.getElementById("ansResonse").innerHTML = "";
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
            document.getElementById("ansResonse").innerHTML = "";
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

// Display high scores
function displayScores() {
    document.getElementById("scoreboardDisplay").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("gameOver").style.display = "none";

    scoreboard_input = "";
    for (k=0; k<scoreboard.length;k++) {
        scoreboard_input = scoreboard_input + " " + scoreboard[k];
    }

    document.getElementById("scoreboard").innerHTML = scoreboard_input;
    refreshPage();
}

// Clear scoreboard
function clearScores() {
    scoreboard = [];
}

// Prompt user to enter initials for scoreboard
function enterScore() {
    scoreboard.push(document.getElementById("initials").value + " " + score);
    displayScores();
}

//End quiz
function endQuiz() {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("timerDisplay").style.display = "none";
    document.getElementById("scoreContainer").style.display = "none";
    document.getElementById("ansResponse").style.display = "none";
    document.getElementById("finalScore").style.display = score;
}

// Return to home page
function returnHome () {
    document.getElementById("scoreboardDisplay").style.display="none";
    document.getElementById("homeContainer").style.display="block";
    refreshPage();
}

// Refresh page
function refreshPage() {
    score = 0;
    startCountdown = false;
    stopCountdown = true;
    time = 60;
    i=0;
}