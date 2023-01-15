// Start button event listener
start_button.addEventListener("click", function() {
    homeContainer.style.display = "none";
    quizContainer.style.display = "block";
    quizTimer.style.display = "block";
    //Display score throughout quiz
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("score").innerHTML = score;
    //start quiz timer and display a question
    startTimer();
    getQuizQuestion();
    
}

// Timer function, counts down from 60 seconds

var timeLeft = 60;
var elem = document.getElementById('timer-display');
var timerId = setInterval(startTimer, 1000);
function startTimer() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        //Take user to enter initials for scoreboard when timer hits 0
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }

    }

// Access quiz buttons

// Listen for a click event on quiz buttons

// If correct button is clicked, display "Correct!" on following page

// If wrong button is clicked, display "Wrong!" on following page