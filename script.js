var startButtonEl = document.querySelector("#start-btn");
var questionBoxEl = document.querySelector("#question-box");
var questionEl = document.querySelector('#question');
var answerButtonsEl = document.querySelector("#answer-list");
var button1El = document.querySelector("#btn1");
var button2El = document.querySelector("#btn2");
var button3El = document.querySelector("#btn3");
var button4El = document.querySelector("#btn4");
var wrongCorrectMessage = document.querySelector("#wrong-correct")

// start the game
startButtonEl.addEventListener("click", startGame);
function startGame(){
    console.log("started");
    startButtonEl.classList.add("hide");
    questionBoxEl.classList.remove("hide");
    activeQuestion = 0;
    questionPicker();
}

function questionPicker(){
    displayQuestions(questions[activeQuestion]);
}

function displayQuestions(question){
    questionEl.innerHTML = question.question;
    button1El.innerHTML = question.choices[0];
    button2El.innerHTML = question.choices[1];
    button3El.innerHTML = question.choices[2];
    button4El.innerHTML = question.choices[3];
    answerButtonsEl.addEventListener("click", answerPicker);
}

function answerPicker(event){
    console.log(event.target);
    var pickedAnswer = event.target.innerHTML;
    if(pickedAnswer === questions[activeQuestion].answer)  {
        wrongCorrectMessage.innerHTML = "Correct"
    }else{
        wrongCorrectMessage.innerHTML = "Wrong"
    }
}



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
        question:"A very useful too used during development and debugging for printing content to the debugger is:",
        answer:"console.log",
        choices:[
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ] 
    }
];