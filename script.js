var startButtonEl = document.querySelector("#start-btn");
var questionBoxEl = document.querySelector("#question-box");
var questionEl = document.querySelector('#question');
var answerButtonsEl = document.querySelector("#answer-list");
var button1El = document.querySelector("#btn1");
var button2El = document.querySelector("#btn2");
var button3El = document.querySelector("#btn3");
var button4El = document.querySelector("#btn4");
var wrongCorrectMessage = document.querySelector("#wrong-correct")
var timerEl = document.querySelector("#timer");
var endQuizEl = document.querySelector("#end-of-quiz");
var finalScoreEl = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials-box");
var submitEl = document.querySelector("#submit-btn");
var scoresScreenEl = document.querySelector("#highscore-screen");
var scoresListEl = document.querySelector("#scores-list");
var goBackEl = document.querySelector("#go-back-btn");
var clearScoreEl = document.querySelector("#clear-hs-btn");

var score = 0;
var timeLeft = 20;

renderSavedInitialsAndScore();

// start the game
startButtonEl.addEventListener("click", startQuiz);
function startQuiz(){
    console.log("started");
    startButtonEl.classList.add("hide");
    questionBoxEl.classList.remove("hide");
    activeQuestion = 0;
    questionPicker();
    timeCountdown();
}

// timer
function timeCountdown(){
   timerInterval = setInterval(function(){
    if(timeLeft > 0){
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft --;
    } else{
        timerEl.textContent = "";
        clearInterval(timerInterval);
        endQuiz();
    }
   }, 1000) ;
}

// picks the question to display
function questionPicker(){
    displayQuestions(questions[activeQuestion]);

}

// populates text in buttons and listens for click
function displayQuestions(question){
    questionEl.innerHTML = question.question;
    button1El.innerHTML = question.choices[0];
    button2El.innerHTML = question.choices[1];
    button3El.innerHTML = question.choices[2];
    button4El.innerHTML = question.choices[3];
    answerButtonsEl.addEventListener("click", answerPicker);
}

// uses the event created by button that was clicked
function answerPicker(event){
    console.log(event.target);
    var pickedAnswer = event.target.innerHTML;

// tell the user if their answer was correct or wrong
    if(pickedAnswer === questions[activeQuestion].answer)  {
        wrongCorrectMessage.innerHTML = "Correct";
        score = score + 20;
        console.log(score);
    }else{
        wrongCorrectMessage.innerHTML = "Wrong";
        timeLeft = timeLeft - 2;
    };

// moves on to the next question as long as there are questions left in the array
    if (questions.length > activeQuestion +1 ) {
        activeQuestion ++;
        questionPicker();

// ends quiz if no more questions are left
    } else {
        console.log("you are out of questions");
        endQuiz();
    }
    
}

//function called when the the quiz needs to end
function endQuiz(){
    clearInterval(timerInterval);
    questionBoxEl.classList.add("hide"); 
    endQuizEl.classList.remove("hide");
    finalScoreEl.innerHTML = "Your final score is: " + score;
}

function renderSavedInitialsAndScore(){
    var initialsEntered = localStorage.getItem("initials");
    var highScore = localStorage.getItem("finalScore");
}

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    var initialsEntered = document.querySelector("#initials-box").value;
    var highScore = score;

    localStorage.setItem("initials", initialsEntered);
    localStorage.setItem("finalScore", highScore);
    renderSavedInitialsAndScore();

    endQuizEl.classList.add("hide");
    scoresScreenEl.classList.remove("hide");
    addScoresToList();

});

function addScoresToList(){
    var li = document.createElement('li');
    var liText = initialsInput.value + "-" + score;
    li.appendChild(document.createTextNode(liText));
    scoresListEl.appendChild(li);
};

goBackEl.addEventListener("click", goBack);
function goBack(){
    scoresScreenEl.classList.add("hide");
    startButtonEl.classList.remove("hide");
    endQuizEl.classList.add("hide");
    score = 0;
    timeLeft = 20;
    
}

clearScoreEl.addEventListener("click", deleteScore);
function deleteScore(){
    scoresListEl.remove();
}

//questions variables
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer: "alerts",
        choices: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ]
    },
    {
        question:"The condition in an if/else statement is enclosed within ____",
        answer:"parentheses",
        choices:[
            "quotes",
            "curly brackets",
            "parentheses",
            "square brakets"
        ]
    },
    {
        question:"Arrays in JavaScritp can be used to store ____.",
        answer:"all of the above",
        choices:[
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ]
    },
    {
        question:"String values must be closed within ____ when being assigned to variables.",
        answer:"quotes",
        choices:[
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ] 
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answer:"console.log",
        choices:[
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ] 
    }
];